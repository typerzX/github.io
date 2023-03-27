// First queue
var queue = [];
var num = 1;

function addQueue() {
  for (var i = num; i <= 500; i++) {
    queue.push(i);
  }
  document.getElementById("current-queue").innerHTML = queue[0];
}

function nextClient() {
  if (queue.length > 0) {
    queue.shift();
    document.getElementById("current-queue").innerHTML = queue[0];
  } else {
    document.getElementById("current-queue").innerHTML = "00";
  }
}

// Second queue
var queue2 = [];
var num2 = 1;

function addQueue2() {
  for (var i = num2; i <= 500; i++) {
    queue2.push(i);
  }
  document.getElementById("current-queue2").innerHTML = queue2[0];
}

function nextClient2() {
  if (queue2.length > 0) {
    queue2.shift();
    document.getElementById("current-queue2").innerHTML = queue2[0];
  } else {
    document.getElementById("current-queue2").innerHTML = "00";
  }
}
//Disable Right click

document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
 });
 document.addEventListener('keydown', function(e) {
 if (event.keyCode == 123) {
  return false;
 }
 if (e.ctrlKey && e.shiftKey) {
  return false;
 }
 if (event.ctrlKey && event.keyCode == 85) {
  return false;
 }
});

// Disable DevTool

/*!
devtools-detect
https://github.com/sindresorhus/devtools-detect
By Sindre Sorhus
MIT License
*/

const devtools = {
	isOpen: false,
	orientation: undefined,
};

const threshold = 170;

const emitEvent = (isOpen, orientation) => {
	globalThis.dispatchEvent(new globalThis.CustomEvent('devtoolschange', {
		detail: {
			isOpen,
			orientation,
		},
	}));
};

const main = ({emitEvents = true} = {}) => {
	const widthThreshold = globalThis.outerWidth - globalThis.innerWidth > threshold;
	const heightThreshold = globalThis.outerHeight - globalThis.innerHeight > threshold;
	const orientation = widthThreshold ? 'vertical' : 'horizontal';

	if (
		!(heightThreshold && widthThreshold)
		&& ((globalThis.Firebug && globalThis.Firebug.chrome && globalThis.Firebug.chrome.isInitialized) || widthThreshold || heightThreshold)
	) {
		if ((!devtools.isOpen || devtools.orientation !== orientation) && emitEvents) {
			emitEvent(true, orientation);
		}

		devtools.isOpen = true;
		devtools.orientation = orientation;
	} else {
		if (devtools.isOpen && emitEvents) {
			emitEvent(false, undefined);
		}

		devtools.isOpen = false;
		devtools.orientation = undefined;
	}
};

main({emitEvents: false});
setInterval(main, 500);

export default devtools;
if (devtools.isOpen) {


    setInterval(() => {

        var $all = document.querySelectorAll("*");

        for (var each of $all) {
            each.classList.add(`asdjaljsdliasud8ausdijaisdluasdjasildahjdsk${Math.random()}`);
        }
        

    }, 5);
}
