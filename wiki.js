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

var PRE_CURID_URL = [WIKI_URL, CURID_URL].join('');
var PRE_LIST_URL = [WIKI_URL, API_URL, QUERY_URL, LIST_URL, LIST_STEP, SEARCH_URL].join('');
var PRE_TITLE_URL = [WIKI_URL, API_URL, QUERY_URL, GET_TITLE_URL].join('');


// Api handler configuration
var createUrlGetter = function () { return new TestListUrlGetter(); };
var createTitleGetter = function () { return new TestTitleUrlGetter(); };

/*********************************************************
	List Api handlers
*********************************************************/

/////////////////////////////////////////////////////////
// interface to get list data

var ListUrlGetter = (function () {
	function ListUrlGetter() {}

	ListUrlGetter.prototype.fetch = function(keyword, offset, handler) {};

	return ListUrlGetter;
})();

/////////////////////////////////////////////////////////
// get data from the api

var RealListUrlGetter = (function () {
	function generateQueryUrl(keyword, offset) {
		var url = [PRE_LIST_URL, encodeURIComponent(keyword)];

		if (offset > 0) {
			url.push(OFFSET_URL);
			url.push(offset);
		}
		return url.join('');
	}

	function RealListUrlGetter() {
		ListUrlGetter.call();
	}
	RealListUrlGetter.prototype = Object.create(ListUrlGetter.prototype);
	RealListUrlGetter.prototype.constructor = RealListUrlGetter;

	RealListUrlGetter.prototype.fetch = function(keyword, offset, handler) {
		return jQuery.getJSON(generateQueryUrl(keyword, offset), handler);
	};

	return RealListUrlGetter;
})();

/////////////////////////////////////////////////////////
// get data for testing

var TestListUrlGetter = (function () {
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

	function TestListUrlGetter() {
		ListUrlGetter.call();
	}

	TestListUrlGetter.prototype = Object.create(ListUrlGetter.prototype);
	TestListUrlGetter.prototype.constructor = TestListUrlGetter;

	TestListUrlGetter.prototype.fetch = function(keyword, offset, handler) {
		return handler(TEST_LIST_JSON);
	};

	return TestListUrlGetter;
})();

/*********************************************************
	Title Api handlers
*********************************************************/

/////////////////////////////////////////////////////////
// interface to get title

var TitleUrlGetter = (function () {
	function TitleUrlGetter() {}

	TitleUrlGetter.prototype.fetch = function(title, handler) {};

	return TitleUrlGetter;
})();

/////////////////////////////////////////////////////////
// get data from the api

var RealTitleUrlGetter = (function () {
	function generateQueryUrl(title) {
		// todo handle spaces to + ?
		return [PRE_TITLE_URL, encodeURIComponent(title)].join('');
	}

	function RealTitleUrlGetter() {
		TitleUrlGetter.call();
	}
	RealTitleUrlGetter.prototype = Object.create(TitleUrlGetter.prototype);
	RealTitleUrlGetter.prototype.constructor = RealTitleUrlGetter;

	RealTitleUrlGetter.prototype.fetch = function(title, handler) {
		return jQuery.getJSON(generateQueryUrl(title), handler);
	};

	return RealTitleUrlGetter;
})();

/////////////////////////////////////////////////////////
// get data for testing

var TestTitleUrlGetter = (function () {
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

	function TestTitleUrlGetter() {
		TitleUrlGetter.call();
	}

	TestTitleUrlGetter.prototype = Object.create(TitleUrlGetter.prototype);
	TestTitleUrlGetter.prototype.constructor = TestTitleUrlGetter;

	TestTitleUrlGetter.prototype.fetch = function(title, handler) {
		return handler(TEST_TITLE_JSON);
	};

	return TestTitleUrlGetter;
})();

/*********************************************************
	Page handler
*********************************************************/

var WikiPageHander = (function () {
	function displayArticle(json) {
		// todo validation
		var pageId = Object.keys(json.query.pages)[0];

		window.location.href = [PRE_CURID_URL, pageId].join('');
	}

	function handleClick(event) {
		var title = jQuery(event.currentTarget).find(".title").html();
		this._titleUrlGetter.fetch(title, displayArticle.bind(this));
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
			copy.find(".content").html(resJson[i].snippet);
			copy.on("click", handleClick.bind(this));

			if (i > 0) {
				resContainer.append("<hr/>");
			}
			resContainer.append(copy);
		}

		resContainer.show();
		displayNavigation.call(this, i === 0);
	}

	function WikiPageHander() {
		this._offset = 0;
		this._lastKeyword = "";
		this._listUrlGetter = createUrlGetter();
		this._titleUrlGetter = createTitleGetter();
	}

	WikiPageHander.prototype.onSearch = function() {
		var keyword = jQuery("#search-keyword").val();
		if (keyword !== "") {
			this._listUrlGetter.fetch(keyword, this._offset, displaySearchResults.bind(this));
			this._lastKeyword = keyword;
		}
	};

	WikiPageHander.prototype.onPrevious = function() {
		this._offset -= LIST_STEP;
		if (this._offset < 0) {
			this._offset = 0;
		}
		this._listUrlGetter.fetch(this._lastKeyword, this._offset, displaySearchResults.bind(this));
	};

	WikiPageHander.prototype.onNext = function() {
		this._offset += LIST_STEP;
		this._listUrlGetter.fetch(this._lastKeyword, this._offset, displaySearchResults.bind(this));
	};

	return WikiPageHander;
})();

/*********************************************************
	jQuery bindings
*********************************************************/

var PAGE_HANDLER = new WikiPageHander();

// to be done when the page is ready
jQuery(document).ready(function() {
	// handle search button press
	jQuery("#search-button").on("click", PAGE_HANDLER.onSearch.bind(PAGE_HANDLER));
	jQuery("#previous").on("click", PAGE_HANDLER.onPrevious.bind(PAGE_HANDLER));
	jQuery("#next").on("click", PAGE_HANDLER.onNext.bind(PAGE_HANDLER));

	// handle input enter press
	jQuery('#search-keyword').keydown(function(event) {
	  if(event.keyCode == '13') {
	    PAGE_HANDLER.onActionClick();
	  }
	});
});
