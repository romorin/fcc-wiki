/*********************************************************
	Configuration
*********************************************************/

//action=query&format=json&prop=&list=search&continue=&srsearch=new+york&srprop=snippet&sroffset=10&srlimit=10
//&continue=&srsearch=new+york

// api url parts
var WIKI_URL = "https://en.wikipedia.org/";
var API_URL = "w/api.php?";
var QUERY_URL = "action=query&format=json&callback=?";
var LIST_STEP = 10;
var LIST_URL = "&prop=&list=search&srprop=snippet&srlimit=";
var SEARCH_URL = "&srsearch=";
var OFFSET_URL = "&sroffset=";
var GET_TITLE_URL = "&titles=";
var CURID_URL = "?curid=";

var PRE_CURID_URL = WIKI_URL + CURID_URL;
var PRE_LIST_URL = WIKI_URL + API_URL + QUERY_URL + LIST_URL + LIST_STEP + SEARCH_URL;
var PRE_TITLE_URL = WIKI_URL + API_URL + QUERY_URL + GET_TITLE_URL;


// Api handler configuration
var createUrlGetter = function () { return new TestListApiGetter(); };
var createTitleGetter = function () { return new TestTitleApiGetter(); };

/*********************************************************
	List Api handlers
*********************************************************/

/////////////////////////////////////////////////////////
// interface to get list data

var ListApiGetter = (function () {
	function ListApiGetter() {}

	ListApiGetter.prototype.fetch = function(keyword, offset, handler) {};

	return ListApiGetter;
})();

/////////////////////////////////////////////////////////
// get data from the api

var RealListApiGetter = (function () {
	function generateQueryUrl(keyword, offset) {
		var url = PRE_LIST_URL + encodeURIComponent(keyword);

		if (offset > 0) {
			url += OFFSET_URL + offset;
		}
		return url;
	}

	function RealListApiGetter() {
		ListApiGetter.call();
	}
	RealListApiGetter.prototype = Object.create(ListApiGetter.prototype);
	RealListApiGetter.prototype.constructor = RealListApiGetter;

	RealListApiGetter.prototype.fetch = function(keyword, offset, handler) {
		return jQuery.getJSON(generateQueryUrl(keyword, offset), handler);
	};

	return RealListApiGetter;
})();

/////////////////////////////////////////////////////////
// get data for testing

var TestListApiGetter = (function () {
	var TEST_LIST_JSON = {
	    "batchcomplete": "",
	    "continue": {
	        "sroffset": 20,
	        "continue": "-||"
	    },
	    "query": {
	        "searchinfo": {
	            "totalhits": 684178
	        },
	        "search": [
	            {
	                "ns": 0,
	                "title": "New York State Route 37",
	                "snippet": "refer to <span class=\"searchmatch\">New</span> <span class=\"searchmatch\">York</span>'s 37th congressional district. This article is about the current alignment of NY 37. For previous alignments of NY 37, see <span class=\"searchmatch\">New</span> <span class=\"searchmatch\">York</span> State"
	            },
	            {
	                "ns": 0,
	                "title": "Lists of New York City Landmarks",
	                "snippet": "These are lists of <span class=\"searchmatch\">New</span> <span class=\"searchmatch\">York</span> City Landmarks designated by the <span class=\"searchmatch\">New</span> <span class=\"searchmatch\">York</span> City Landmarks Preservation Commission: <span class=\"searchmatch\">New</span> <span class=\"searchmatch\">York</span> City Designated Landmarks in Manhattan:"
	            },
	            {
	                "ns": 0,
	                "title": "New York State Bar Association",
	                "snippet": "NYSBA was founded on November 21, 1876 in Albany, <span class=\"searchmatch\">New</span> <span class=\"searchmatch\">York</span>, and then incorporated on May 2, 1877 by an act of the State Legislature. The goals of the Association"
	            },
	            {
	                "ns": 0,
	                "title": "New York State Route 318",
	                "snippet": "<span class=\"searchmatch\">New</span> <span class=\"searchmatch\">York</span> State Route\u00a0318 (NY\u00a0318) is an east\u2013west state highway in the Finger Lakes region of <span class=\"searchmatch\">New</span> <span class=\"searchmatch\">York</span> in the United States. The western terminus of the"
	            },
	            {
	                "ns": 0,
	                "title": "New York State Department of Transportation",
	                "snippet": "The <span class=\"searchmatch\">New</span> <span class=\"searchmatch\">York</span> State Department of Transportation (NYSDOT) is the department of the <span class=\"searchmatch\">New</span> <span class=\"searchmatch\">York</span> state government responsible for the development and operation"
	            },
	            {
	                "ns": 0,
	                "title": "2006 New York City plane crash",
	                "snippet": "73\u00b057\u203208\u2033W\ufeff / \ufeff40.765833\u00b0N 73.952222\u00b0W\ufeff / 40.765833; -73.952222 The 2006 <span class=\"searchmatch\">New</span> <span class=\"searchmatch\">York</span> City plane crash occurred on October 11, 2006, when a Cirrus SR20 general"
	            },
	            {
	                "ns": 0,
	                "title": "New York State Route 427",
	                "snippet": "Essex County, see <span class=\"searchmatch\">New</span> <span class=\"searchmatch\">York</span> State Route 73. <span class=\"searchmatch\">New</span> <span class=\"searchmatch\">York</span> State Route\u00a0427 (NY\u00a0427) is an east\u2013west state highway in Chemung County, <span class=\"searchmatch\">New</span> <span class=\"searchmatch\">York</span>, in the United States"
	            },
	            {
	                "ns": 0,
	                "title": "New York Supreme Court",
	                "snippet": "<span class=\"searchmatch\">New</span> <span class=\"searchmatch\">York</span>, see <span class=\"searchmatch\">New</span> <span class=\"searchmatch\">York</span> Court of Appeals. The Supreme Court of the State of <span class=\"searchmatch\">New</span> <span class=\"searchmatch\">York</span> is the trial-level court of general jurisdiction in the <span class=\"searchmatch\">New</span> <span class=\"searchmatch\">York</span> State"
	            },
	            {
	                "ns": 0,
	                "title": "Millersport, New York",
	                "snippet": "<span class=\"searchmatch\">New</span> <span class=\"searchmatch\">York</span> is a hamlet in the town of Clarence in Erie County, <span class=\"searchmatch\">New</span> <span class=\"searchmatch\">York</span>, USA. It is the namesake of the Millersport Highway, known legally as <span class=\"searchmatch\">New</span> <span class=\"searchmatch\">York</span> State"
	            },
	            {
	                "ns": 0,
	                "title": "New York State Route 16",
	                "snippet": "16 may also refer to <span class=\"searchmatch\">New</span> <span class=\"searchmatch\">York</span>'s 16th congressional district. <span class=\"searchmatch\">New</span> <span class=\"searchmatch\">York</span> State Route\u00a016 (NY\u00a016) is a state highway in western <span class=\"searchmatch\">New</span> <span class=\"searchmatch\">York</span>, in the United States"
	            }
	        ]
	    }
	};

	function TestListApiGetter() {
		ListApiGetter.call();
	}

	TestListApiGetter.prototype = Object.create(ListApiGetter.prototype);
	TestListApiGetter.prototype.constructor = TestListApiGetter;

	TestListApiGetter.prototype.fetch = function(keyword, offset, handler) {
		return handler(TEST_LIST_JSON);
	};

	return TestListApiGetter;
})();

/*********************************************************
	Title Api handlers
*********************************************************/

/////////////////////////////////////////////////////////
// interface to get title

var TitleApiGetter = (function () {
	function TitleApiGetter() {}

	TitleApiGetter.prototype.fetch = function(title, handler) {};

	return TitleApiGetter;
})();

/////////////////////////////////////////////////////////
// get data from the api

var RealTitleApiGetter = (function () {
	function generateQueryUrl(title) {
		// todo handle spaces to + ?
		return PRE_TITLE_URL + encodeURIComponent(title);
	}

	function RealTitleApiGetter() {
		TitleApiGetter.call();
	}
	RealTitleApiGetter.prototype = Object.create(TitleApiGetter.prototype);
	RealTitleApiGetter.prototype.constructor = RealTitleApiGetter;

	RealTitleApiGetter.prototype.fetch = function(title, handler) {
		return jQuery.getJSON(generateQueryUrl(title), handler);
	};

	return RealTitleApiGetter;
})();

/////////////////////////////////////////////////////////
// get data for testing

var TestTitleApiGetter = (function () {
	var TEST_TITLE_JSON = {
	    "batchcomplete": "",
	    "query": {
	        "pages": {
	            "645042": {
	                "pageid": 645042,
	                "ns": 0,
	                "title": "New York City"
	            }
	        }
	    }
	};

	function TestTitleApiGetter() {
		TitleApiGetter.call();
	}

	TestTitleApiGetter.prototype = Object.create(TitleApiGetter.prototype);
	TestTitleApiGetter.prototype.constructor = TestTitleApiGetter;

	TestTitleApiGetter.prototype.fetch = function(title, handler) {
		return handler(TEST_TITLE_JSON);
	};

	return TestTitleApiGetter;
})();

/*********************************************************
	Search handler
*********************************************************/

var WikiSearchHandler = (function () {
	function displayArticle(json) {
		// todo validation
		var pageId = Object.keys(json.query.pages)[0];

		window.location.href = PRE_CURID_URL + pageId;
	}

	function resultClick(event) {
		var title = jQuery(event.currentTarget).find(".title").html();
		this._titleUrlGetter.fetch(title, displayArticle.bind(this));
	}

	function resultHoverIn(event) {
		jQuery(event.currentTarget).addClass('hovering-result');
	}

	function resultHoverOut(event) {
		jQuery(event.currentTarget).removeClass('hovering-result');
	}

	function displayNavigation(noMoreResults) {
		if (this._offset === 0) {
			jQuery("#previous").hide();
		} else {
			jQuery("#previous").show();
		}
		if (noMoreResults) {
			jQuery("#next").hide();
		} else {
			jQuery("#next").show();
		}
	}

	function displaySearchResults(json) {
		// todo validation
		var resJson = json.query.search;
		var resContainer = jQuery(".results");
		var resTemplate = jQuery(".result-template > div");

		resContainer.empty();

		var i = 0;
		for (; i < resJson.length; i++) {
			var copy = resTemplate.clone();

			copy.find(".title").html(resJson[i].title);
			copy.find(".content").html(resJson[i].snippet + "...");
			copy.on("click", resultClick.bind(this));
			copy.hover(resultHoverIn.bind(this), resultHoverOut.bind(this));

			if (i > 0) {
				resContainer.append("<hr/>");
			}
			resContainer.append(copy);
		}

		resContainer.show();
		displayNavigation.call(this, i === 0);
	}

	function WikiSearchHandler() {
		this._offset = 0;
		this._lastKeyword = "";
		this._listUrlGetter = createUrlGetter();
		this._titleUrlGetter = createTitleGetter();
	}

	WikiSearchHandler.prototype.onSearch = function() {
		var keyword = jQuery("#search-keyword").val();
		if (keyword !== "") {
			this._listUrlGetter.fetch(keyword, this._offset, displaySearchResults.bind(this));
			this._lastKeyword = keyword;
		}
	};

	WikiSearchHandler.prototype.onPrevious = function() {
		this._offset -= LIST_STEP;
		if (this._offset < 0) {
			this._offset = 0;
		}
		this._listUrlGetter.fetch(this._lastKeyword, this._offset, displaySearchResults.bind(this));
	};

	WikiSearchHandler.prototype.onNext = function() {
		this._offset += LIST_STEP;
		this._listUrlGetter.fetch(this._lastKeyword, this._offset, displaySearchResults.bind(this));
	};

	return WikiSearchHandler;
})();

/*********************************************************
	jQuery bindings
*********************************************************/

function navHoverIn(event) {
	jQuery(event.currentTarget).addClass('hovering-nav');
}

function navHoverOut(event) {
	jQuery(event.currentTarget).removeClass('hovering-nav');
}

var PAGE_HANDLER = new WikiSearchHandler();

// to be done when the page is ready
jQuery(document).ready(function() {
	// handle search button press
	jQuery("#search-button").on("click", PAGE_HANDLER.onSearch.bind(PAGE_HANDLER));
	var previous = jQuery("#previous");
	previous.on("click", PAGE_HANDLER.onPrevious.bind(PAGE_HANDLER));
	previous.hover(navHoverIn, navHoverOut);

	var next = jQuery("#next");
	next.on("click", PAGE_HANDLER.onNext.bind(PAGE_HANDLER));
	next.hover(navHoverIn, navHoverOut);

	// handle input enter press
	jQuery('#search-keyword').keydown(function(event) {
	  if(event.keyCode == '13') {
	    PAGE_HANDLER.onActionClick();
	  }
	});
});
