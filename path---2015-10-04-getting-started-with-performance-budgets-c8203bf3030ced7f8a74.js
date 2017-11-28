webpackJsonp([0x9ee90dd0667b],{325:function(e,i){e.exports={data:{markdownRemark:{html:'<p>These are notes from a talk by Tim Kadlec (@tkadlec) during the HighEdWeb 2015 Technology Academy. Tim is a Technology Advocate at Akami. </p>\n<ul>\n<li>Performance on the web is not a technical issue, it is a cultural issue. </li>\n<li>Lack of Performance = Lack of Planning</li>\n<li>from Beautiful Robust and Fast to Beautiful and Done on time</li>\n<li>"We\'re going to come back and fix it after" fails</li>\n<li>If performance wasn\'t a priority at the start, it won\'t be a priority at the end.</li>\n<li>Performance (like plumbing) is only a problem if it\'s broken.</li>\n<li>Performance is linked to every key performance indicator (traffic, bounce rates, revenue, conversion rates, etc.)</li>\n<li>Performance Budget = A clearly defined performance goal to guide design &#x26; development</li>\n<li>WebPageTest.org</li>\n<li>\n<p>Four Types of Metrics: </p>\n<ol>\n<li>Quantity Based - metrics related to the site\'s performance. Easy to understand, clear tie to design/development decisions. <a href="http://bit.ly/1Jw2jj7">http://bit.ly/1Jw2jj7</a>. Not the whole picture, almost no connection to the user experience.</li>\n<li>Rule Based - adherence to specific rules. [Google PageSpeed, YSlow]. Great checklist of basic optimizations. Easy to understand. Still no connection to the user experience. </li>\n<li>\n<p>Milestone Timing - Timing of a very specific moment in the course of loading the page. Easy to track and communicate. Allows for very specific metrics. Limited view of the user experience (though getting closer).</p>\n<ul>\n<li>TTFB: when the browser receives first byte. </li>\n<li>Start Render: when stuff starts to show up on the page. </li>\n<li>DOMContentLoaded: execute scripts attached to the page. </li>\n<li>DocumentComplete: when the document has finished executing. </li>\n<li>Fully Loaded: Nothing else to load.</li>\n</ul>\n</li>\n<li>Speed Index - a representation of the perceived load of a page, from start to finish. How quickly the majority of the content is displayed. Takes a video of the loading and then analyzes the video. Currently the best representation of the user experience. Difficult to communicate. Limited tracking options.</li>\n</ol>\n</li>\n<li>\n<p>How fast is fast enough?</p>\n<ul>\n<li>As fast as possible.</li>\n<li>Study from the 1960\'s around response times: if there is a 100ms delay, it feels instantaneous. If 1000ms or less keeps you within the state of flow. At 10,000ms people tend to walk away.</li>\n<li>1,000 Speed Index or less (Paul Irish)</li>\n<li>But the media speed index is over 5,000 and mobile is almost 8,000. </li>\n<li>This is a cultural issue with many barriers. </li>\n</ul>\n</li>\n<li>Celebrate the small victories (Lara Hogan). This helps make it part of the culture, creates sustainable change by celebrating all the small steps along the way.</li>\n<li>20% rule: "Designing and Engineering Time" Become notably faster than a competitor (20% faster). Your site and 10-12 competitors. </li>\n<li>Request a WebPageTest API key. WPT-Bulk-Tester = Super cool.</li>\n<li>Use the results of the 20% to set a performance budget. </li>\n<li><a href="http://bit.ly/15A74dw">http://bit.ly/15A74dw</a></li>\n<li>[20% could also be just 20% faster than your site runs now]</li>\n<li>You can (roughly) translate target times into file size weights</li>\n<li><a href="http://bit.ly/1qtilDT">http://bit.ly/1qtilDT</a></li>\n<li>Designers can learn to like working within constraints.</li>\n<li>perf.js gist from Tim</li>\n<li>PerfBar plugin. (suggested changing the color of the bar on load)</li>\n<li>Enforce: automate it!</li>\n<li>Monitor. Speedcurve.com</li>\n<li>\n<p>What happens after load?</p>\n<ul>\n<li>Our websites are made up of little experiences. </li>\n<li>\n<p>RAIL: </p>\n<ul>\n<li>Response: 100ms = instantaneous</li>\n<li>Animation: fluid 60fps (jankfree.org)</li>\n<li>Idle: if you\'re going to do something, do it while the user is idle </li>\n<li>Load: ready to use in 1,000ms (or your budget/goal)</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>Pick your metrics</li>\n<li>Define your budget</li>\n<li>Enforce the budget </li>\n</ul>\n<p>Peace<br>-- KS<br>Web Developer at Benedictine University near Chicago</p>',frontmatter:{title:"Getting Started with Performance Budgets",author:"Kevin D. Sherman"}}},pathContext:{slug:"/2015-10-04-getting-started-with-performance-budgets/"}}}});
//# sourceMappingURL=path---2015-10-04-getting-started-with-performance-budgets-c8203bf3030ced7f8a74.js.map