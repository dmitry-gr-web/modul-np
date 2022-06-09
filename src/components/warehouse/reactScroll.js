// const { Component } = React;
// const { render } = ReactDOM;

import { Component } from 'react';
// const {render} = ReactDOM;
// const root = document.body;
class ScrollBox extends Component {
	state = {
		shouldScroll: false,
	};

	constructor(props) {
		super(props);
		this.resize = this.resize.bind(this);
	}

	//   componentDidMount() {
	//     const { content, thumb } = this;
	//     const { viewportHeight, ratio } = this;
	//     console.log(this.viewportHeight, this.contentHeight)
	//     const thumbHeight = viewportHeight * ratio;
	//     // console.log(content)
	//     thumb.style.height = `${thumbHeight}px`;

	//   }

	resize() {
		const { content, thumb, thumbHorizont, scrollbar, scrollbarHorizont } = this;
		const { viewportHeight, ratio, ratioWidth, viewportWidth } = this;
		// console.log(this.viewportHeight, this.contentHeight)
		const thumbHeight = viewportHeight * ratio * this.props.percent; // 0.93 tut - 7%
		const thumbWidth = viewportWidth * ratioWidth * 2;
		// console.log(ratioWidth)
		if(thumb?.style){
			thumb.style.height = `${thumbHeight}px`;
			thumbHorizont.style.width = `${thumbWidth}px`;
			if (content.offsetHeight > content.children[0].offsetHeight) {
				scrollbar.style.display = 'none';
			}
			if (content.offsetWidth > content.children[0].offsetWidth) {
				scrollbarHorizont.style.display = 'none';
			}
		}

	}

	componentDidMount() {
		window.addEventListener('resize', this.resize);
	}
	componentDidUpdate() {
		const { content, thumb, thumbHorizont, scrollbar, scrollbarHorizont, contentHeight } = this;
		const { viewportHeight, ratio, ratioWidth, viewportWidth } = this;
		// console.log(this.viewportHeight, this.contentHeight)
		const thumbHeight = viewportHeight * ratio * this.props.percent; // 0.93 - 7%
		const thumbWidth = viewportWidth * ratioWidth * 2;
		// console.log(ratioWidth)
		thumb.style.height = `${thumbHeight}px`;
		thumbHorizont.style.width = `${thumbWidth}px`;
		if(content?.offsetHeight){
		if (content.offsetHeight > content.children[0].offsetHeight) {
			scrollbar.style.display = 'none';
		}
		if (content.offsetWidth > content.children[0].offsetWidth) {
			scrollbarHorizont.style.display = 'none';
		}}
		// console.log(viewportHeight, ratio, contentHeight,thumbHeight);
	}

	get viewportHeight() {
		return (this.content?.offsetHeight);
	}
	get contentHeight() {
		return this.content?.scrollHeight;
	}
	get ratio() {
		return (this.viewportHeight / this.contentHeight);
	}

	get viewportWidth() {
		return this.content?.offsetWidth * 0.5;
	}
	get contentWidth() {
		return this.content?.scrollWidth;
	}
	get ratioWidth() {
		return this.viewportWidth / this.contentWidth;
	}

	handleScroll = (event) => {
		const { content, thumb, thumbHorizont } = this;
		const { viewportHeight, ratio, contentHeight, ratioWidth, viewportWidth } = this;
		const scrollTop = content.scrollTop * this.props.percent; // 7% tut
		// console.log(scrollTop);
		const scrollLeft = content.scrollLeft;
		const thumbHeight = viewportHeight * ratio;
		const thumbWidth = viewportWidth * ratioWidth * 2;
		const thumbTop = scrollTop * ratio;
		const thumbLeft = scrollLeft * ratioWidth;
		this.props.scroll(event);
		// console.log(viewportHeight ,contentHeight)
		thumb.style.transform = `translateY(${thumbTop}px)`;
		// console.log(`${scrollTop} * ${ratio} = ${thumbTop}`)
		thumb.style.height = `${thumbHeight}px`;
		thumbHorizont.style.transform = `translateX(${thumbLeft}px)`;
		thumbHorizont.style.width = `${thumbWidth}px`;
	};

	scroll = (event) => {
		const { scrollbar, content, thumb, ratio } = this;
		const clientY = event.clientY;
		const scrollbarRects = scrollbar.getBoundingClientRect();
		const scrollbarTop = scrollbarRects.top + window.pageYOffset;
		const thumbRects = thumb.getBoundingClientRect();
		const thumbTop = thumbRects.top + window.pageYOffset;
		const shiftY = event.pageY - thumbTop;
		const max = scrollbar.offsetHeight - thumb.offsetHeight + 1;

		document.onmousemove = (event) => {
			let top = event.pageY - shiftY - scrollbarTop;

			top = top < 0 ? 0 : top > max ? max : top;

			content.scrollTop = top / ratio;
		};

		document.onmouseup = () => {
			document.onmousemove = document.onmouseup = null;
		};
	};
	scrollLeft = (event) => {
		const { scrollbarHorizont, content, thumbHorizont, ratioWidth } = this;
		const clientY = event.clientY;
		const scrollbarRects = scrollbarHorizont.getBoundingClientRect();
		const scrollbarLeft = scrollbarRects.left + window.pageXOffset;
		const thumbRects = thumbHorizont.getBoundingClientRect();
		const thumbLeft = thumbRects.left + window.pageXOffset;
		const shiftX = event.pageX - thumbLeft;
		const max = scrollbarHorizont.offsetWidth - thumbHorizont.offsetWidth + 1;

		document.onmousemove = (event) => {
			let left = event.pageX - shiftX - scrollbarLeft;

			left = left < 0 ? 0 : left > max ? max : left;

			content.scrollLeft = left / ratioWidth;
		};

		document.onmouseup = () => {
			document.onmousemove = document.onmouseup = null;
		};
	};

	render() {
		const { shouldScroll, props, content } = this;
		const color = props.color || '#000';
		// const func = props.scroll;
		const children = props.children;

		// window.addEventListener('resize',function(){
		//     this.handleScroll()
		// });

		// console.log(content?.children[0].offsetHeight, content?.offsetHeight)
		function showScrollbar () {
			document.querySelector('.scrollbar').style.opacity = 1;
			document.querySelector('.scrollbarHorizont').style.opacity = 1;
		}
		function hideScrollbar () {
			document.querySelector('.scrollbar').style.opacity = 0;
			document.querySelector('.scrollbarHorizont').style.opacity = 0;
		}
		return (
			<div className="scrollbox" 	
				onMouseEnter={showScrollbar}
				onMouseLeave={hideScrollbar}
			>
				<div
					onScroll={this.handleScroll}
					ref={(div) => (this.content = div)}
					className="contentScroll"
				>
					{children}
				</div>
				<div
					className="scrollbar"
					ref={(div) => (this.scrollbar = div)}
					style={{ height: `${this.props.percent * 100}%` }} //tut props percent 7%
				>
					<div
						className="thumb"
						ref={(div) => (this.thumb = div)}
						style={{ backgroundColor: color }}
						// onMouseDown={this.scroll}
						// onSelectStart={event => event.preventDefault()}
					/>
				</div>
				<div
					className="scrollbarHorizont"
					ref={(div) => (this.scrollbarHorizont = div)}
					style={{ width: 'calc(100% * 0.5 - 10px)' }}
					//   style={{top: this.props.top, height: `calc(100% - ${this.props.bottom + this.props.top + 3}px)`}}
				>
					<div
						className="thumbHorizont"
						ref={(div) => (this.thumbHorizont = div)}
						style={{ backgroundColor: color }}
						onMouseDown={this.scrollLeft}
						// onSelectStart={event => event.preventDefault()}
					/>
				</div>
			</div>
		);
	}
}
export default ScrollBox;

// render(
//   <div className="example">
//     <ScrollBox color="#999">Where does it come from?
// Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

// The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. Where does it come from?
// Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

// The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
//     </ScrollBox>
//   </div>,
//   root
// );
