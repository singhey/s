
$(function() {
	var reasons = new Vue({
		el: "#reasons",
		data: {
			"reason": [
				{
					"heading" : "We Listen",
					"reason" : "We are experts at content but we understand that each client has a different requirement and goal. We do not offer cookie cutter plans but instead hear our client issues and create content according to their specifications. ",
				},
				{
					"heading" : "We provide quality",
					"reason" : "We keep our writers happy and it reflects in the kind of work we deliver! We ensure that we hire the best writers with a professional or academic background in a particular niche and assign projects. This translates to high quality content for your projects. ",
				},
				{
					"heading" : "We are consistent",
					"reason" : "We offer consistency in the quality of our work. We dedicate writers to your project to ensure that there is consistency in the writing quality. ",
				},
				{
					"heading" : "We are available",
					"reason" : "We understand that working with an external agency takes effort but we are here to make it easy for you. We are available 24 X 7 to revert to your queries be it through Email, WhatsApp or Phone.",
				},
				{
					"heading" : "We are flexible",
					"reason" : "We are a young and agile company and understand that there is no ‘one box fits all’ approach. We offer a plethora of services and you can hire us simply for one e-book or allow us to manage your entire yearly blog content, the choice is yours! ",
				},
			]
		},
	});

	var faq = new Vue({
		el: "#faq",
		data: {
			"faq" : [
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
			]
		}
	});

	var accordion = $('body').find('[data-behavior="accordion"]');
var expandedClass = 'is-expanded';

$.each(accordion, function () { // loop through all accordions on the page

  var accordionItems = $(this).find('[data-binding="expand-accordion-item"]');

  $.each(accordionItems, function () { // loop through all accordion items of each accordion
    var $this = $(this);
    var triggerBtn = $this.find('[data-binding="expand-accordion-trigger"]');
    
    var setHeight = function (nV) {
      // set height of inner content for smooth animation
      var innerContent = nV.find('.accordion__content-inner')[0],
          maxHeight = $(innerContent).outerHeight(),
          content = nV.find('.accordion__content')[0];

      if (!content.style.height || content.style.height === '0px') {
        $(content).css('height', maxHeight);
      } else {
        $(content).css('height', '0px');
      }
    };
    
    var toggleClasses = function (event) {
      var clickedItem = event.currentTarget;
      var currentItem = $(clickedItem).parent();
      var clickedContent = $(currentItem).find('.accordion__content');
      $(currentItem).toggleClass(expandedClass);
      setHeight(currentItem);
      
      if ($(currentItem).hasClass('is-expanded')) {
        $(clickedItem).attr('aria-selected', 'true');
        $(clickedItem).attr('aria-expanded', 'true');
        $(clickedContent).attr('aria-hidden', 'false');

      } else {
        $(clickedItem).attr('aria-selected', 'false');
        $(clickedItem).attr('aria-expanded', 'false');
        $(clickedContent).attr('aria-hidden', 'true');
      }
    };
    
    triggerBtn.on('click', event, function (e) {
      e.preventDefault();
      toggleClasses(event);
    });

    // open tabs if the spacebar or enter button is clicked whilst they are in focus
    $(triggerBtn).on('keydown', event, function (e) {
      if (e.keyCode === 13 || e.keyCode === 32) {
        e.preventDefault();
        toggleClasses(event);
      }
    });
  });

});


});