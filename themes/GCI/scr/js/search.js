// From https://gist.github.com/sebz/efddfc8fdcb6b480f567
// Modified sections pointed out

var lunrIndex,
    $results,
    pagesIndex;

// Initialize lunrjs using our generated index file
function initLunr() {
    // First retrieve the index file
    $.getJSON("/created/js/jason/PagesIndex.json")
        .done(function(index) {
            pagesIndex = index;
            // Set up lunrjs by declaring the fields we use
            // Also provide their boost level for the ranking
            lunrIndex = lunr(function() {
                this.field("title", {
                    boost: 10
                });
                this.field("tags", {
                    boost: 5
                });
                this.field("content");

                // ref is the result item identifier (I chose the page URL)
                this.ref("href");

                // Feed lunr with each file and let lunr actually index them
                //Modified to work with newer version
                // uses basic for loop instead of for each to prevent this from going out of scope
                for (var i = 0; i < pagesIndex.length; i++) {
                    this.add(pagesIndex[i]);
                }

                console.log("Search Data Loaded");
            });


        })
        .fail(function(jqxhr, textStatus, error) {
            var err = textStatus + ", " + error;
            console.error("Error getting Hugo index flie:", err);
        });
}

// Nothing crazy here, just hook up a listener on the input field
function initUI() {
    $results = $("#results");

    var inputs = ['#input_mobile', '#input_modal', '#input_desk'];

    $(".search_button").click(function() {
        $results.empty();

        var current_visible;
        if ($('#mobile_search').is(":visible")) {
            current_visible = inputs[0];
        } else {
            current_visible = inputs[2];
        }

        if ($('#search_modal').is(":visible")) {
            current_visible = inputs[1];
        }

        var query = $(current_visible).val();

        if (query.length < 2) {
            return;
        }

        $('#modal_title').text(' ' + query);
        $('#search_modal').modal('show');

        var results = search(query);
        renderResults(results);
        return false;
    });

    $(window).keydown(function(event){
        if(event.keyCode == 13) {
            event.preventDefault();
            $( ".search_button" ).trigger( "click" );
        }
    });
}

/**
 * Trigger a search in lunr and transform the result
 *
 * @param  {String} query
 * @return {Array}  results
 */
function search(query) {
    // Find the item in our index corresponding to the lunr one to have more info
    // Lunr result:
    //  {ref: "/section/page1", score: 0.2725657778206127}
    // Our result:
    //  {title:"Page1", href:"/section/page1", ...}
    return lunrIndex.search(query).map(function(result) {
        return pagesIndex.filter(function(page) {
            return page.href === result.ref;
        })[0];
    });
}

/**
 * Display the 10 first results
 *
 * @param  {Array} results to display
 */
function renderResults(results) {
    if (!results.length) {
        var $result = $('<h3 class="pt-3 pb-3">No Results, Try a different phrase above</h3>');
        $results.append($result);
    }

    // Only show the ten first results
    results.slice(0, 10).forEach(function(result) {
        var $result = $('<li class="search_list red-underline">');
        $result.append($("<a>", {
            href: result.href,
            text: result.title,
            class: "search_link red-underline"
        }));
        $result.append($("<p>", {
            text: result.description,
            class: "normal"
        }));
        $results.append($result);
    });

}

// Let's get started
initLunr();

$(document).ready(function() {
    initUI();
});