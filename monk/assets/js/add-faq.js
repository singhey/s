var faq = [
	{
		"question" : "Why do I need fresh content on my site?",
		"answer" : "Fresh, relevant content helps build and engage your customer base. It’s important to make sure that your content is up to date and relates to your audience. Our writers are trained to ensure that they write content that is fresh and relevant to your audience Furthermore, fresh and relevant content helps search engines recognize your website as trustworthy and determine where you should be displayed on the Search Engine Results Page, also known as the SERP.",
	},
	{
		"question" : "Do you provide SEO content?",
		"answer" : "Absolutely! In fact, SEO agencies from around the world have trusted us for over three years to provide them with high quality, search engine optimized content. Our interactive content order form enables you to specify which keywords you would like included in your copy. From there, the writer will be sure to incorporate these keywords throughout your content. Looking for SEO metadata? Our writers can do that too.",
	},
	{
		"question" : "What happens if I don’t like the content?",
		"answer" : "It’s simple – you don’t pay for content you don’t like. If you aren’t happy with the content your writer has produced, you can send it back to your writer for unlimited revisions.In the rare case that your writer completely misses the mark after the revision process, simply reject the content and we will refund you the cost of that order.",
	},
	{
		"question" : "Do you offer proofreading?",
		"answer" : "Yes. Contact your customer success manager to learn more about our proofreading services.",
	},
	{
		"question" : "How much does a website cost?",
		"answer" : "The best way to determine how much your website will cost is to figure out how many words you plan to have on each page of your website. Once you’ve determined roughly how many words will be on your site, visit our pricing page and utilize the automatic price calculator. Unsure about website content best practices? No problem. Email us, or call 1-888-983-3103 and our content strategists will guide you through website best practices at no cost",
	},
	{
		"question" : "I need content today. Is that possible?",
		"answer" : "Yes. Call us, 1-888-983-3103. We will make sure to match you with a writer who is available to write for you right away.",
	},
	{
		"question" : "How do you guarantee 100% unique content?",
		"answer" : "We have you covered. Before a writer can send you the content they have created, the copy is scanned using a Google-approved tool called Copyscape. Copyscape takes the content your writer has created and scans the entire internet to make sure there’s no duplicate content anywhere on the web.You do not need to worry about duplicate content with Crowd Content writers.",
	},
	{
		"question" : "Can I to talk to my writer(s)?",
		"answer" : "Absolutely! Content creation is a collaborative process. That’s why we’ve made it easy for you to chat with your writer in real time. There’s an instant chat window attached to every content order for you to easily get in touch with your writer. Watch this video to see instant chat in action.",
	},
	{
		"question" : "How will my writer know what to write?",
		"answer" : "The instructions that you give your writer are what they use as a road map for their research and writing. The order form gives you all the basics you need to get your writer on the right track. Remember, writers are not mind readers. We encourage you to give them as much information as you can. Do you have an existing style guide or template? You can upload it directly to the content order form for the writer to reference. Watch this video for more information on how your writer knows what to write.",
	},
];


$(function(){
	var faqLayout = $('<article class="accordion__item js-show-item-default" data-binding="expand-accordion-item" v-for="f in faq">'+
				       '<span id="tab5" tabindex="0" class="accordion__title" aria-controls="panel5" role="tab" aria-selected="false" aria-expanded="false" data-binding="expand-accordion-trigger">'+
				        	'<h5><span class="question"></span> <span class="close">&times;</span></h5>'+
				        '</span>'+
				        '<div id="panel5" class="accordion__content" role="tabpanel" aria-hidden="true" aria-labelledby="tab5" data-binding="expand-accordion-container">'+
				        	'<div class="accordion__content-inner">'+
				            	'<p class="answer"></p>'+
				          	'</div>'+
					    '</div>'+
				    '</article>');

	//loop throught layout and form faq

	console.log($(faqLayout).find(".question"));

	var accordion = $("#accordion");
	for(var i = 0; i < faq.length; i++) {
		//console.log(faq[i].answer);
		console.log(faq[i].question);
		faqLayout.find(".question").html(faq[i].question);
		faqLayout.find(".answer").html(faq[i].answer);
		//console.log($(faqLayout).find(".question"));
		accordion.append(faqLayout);
	}
});