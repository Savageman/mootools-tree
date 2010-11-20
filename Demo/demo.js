window.addEvent('domready', function() {
	// Example #1
	new Tree('tree', {

		checkDrag: function(element){
			return !element.hasClass('nodrag');
		},

		checkDrop: function(element){
			return !element.hasClass('nodrop');
		}

	});

	var dispose = new Element('span.dispose[text=(remove)]').addEvents({

		mousedown: function(event){
			event.preventDefault();
		},

		click: function(){
			this.getParent('li').dispose();
		}

	});

	document.id('tree').addEvents({

		'mouseover:relay(li)': function(){
			this.getElement('span').adopt(dispose);
		},

		mouseleave: function(){
			dispose.dispose();
		}

	});

	var i = 1;
	document.id('addItem').addEvent('click', function(){
		new Element('li').adopt(new Element('span[text=New Item #' + (i++) + ']')).inject('tree');
	});

	// Example #2
	new Collapse.Cookie('collapse');

	// Example #3
	new Tree('both');
	new Collapse('both');
});