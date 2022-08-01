import React, { Component } from 'react';
import { DateRangePicker } from 'react-date-ranges';
import 'react-date-ranges/dist/styles.css';
import 'react-date-ranges/dist/theme/default.css';
import { addDays, format } from 'date-fns';
// import { ru } from 'date-fns/locale';

import ru from '../data/ru/index';

let timer = null;


class Calendar extends Component {

    constructor(props) {
        // console.log(ru);
        super(props);
        this.refBlock = React.createRef();

        this.state = {
            menu: null,
            stats: [{
                startDate: null,
                endDate: null,
                key: 'selection'
            }],
            open: false,
            select: false,
            arrowActive:'down',
            arrowToggle: false,
            activity:false,
            // sortActive: false
        }
        this.handle = this.handle.bind(this);
        this.sortClickBtn = this.sortClickBtn.bind(this);

    }

    handle(e) {
        if (this.refBlock.current && !this.refBlock.current.contains(e.target) && this.state.select) {
            this.props.onWrapper(false);
            this.setState({
                arrowToggle: false,
                // arrowActive:'down',
                // activity:false
            })
            // this.props.query();
        }
    }


    componentDidMount() {
        document.addEventListener("click", this.handle);
    }

    componentWillUnmount() {
        document.removeEventListener("click", this.handle);
    }

    componentDidUpdate(prevProps, prevState) {
        if (!this.props.wrapper && this.state.select) {
            this.setState({
                open: false,
                select: false
            })
            this.props.setHideMenu(false);
            this.refBlock.current.closest('.wrapper-scroll .scroll').style.overflowY = 'scroll';
            this.refBlock.current.closest('.wrapper-scroll').querySelector('.track-vertical').style.opacity = 1;
            this.refBlock.current.closest('.wrapper-scroll').querySelector('.track-horizontal').style.opacity = 1;
        }
        if (JSON.stringify(this.state.stats) !== JSON.stringify(prevState.stats) && this.state.stats[0].startDate !== null) {
            this.props.onWrapper(true);
            this.setState({
                select: true
            })
            this.props.setHideMenu(true);
            this.refBlock.current.closest('.wrapper-scroll .scroll').style.overflowY = 'hidden';
            this.refBlock.current.closest('.wrapper-scroll').querySelector('.track-vertical').style.opacity = 0;
            this.refBlock.current.closest('.wrapper-scroll').querySelector('.track-horizontal').style.opacity = 0;
        }
        if(prevProps.sortActive !== this.props.sortActive && !this.state.open) {
            this.setState({
                arrowToggle: false,
                arrowActive:'down',
                activity:false
            })
            // return true;
        } 
        // setTimeout(() => {
        //     this.setState({
        //         open: false
        //     })
        // }, 0);
            // useEffect(() => {
            // setArrowActive('down');
            // setArrowToggle(false);
            // setActivity(false);
	        // }, [sortActive]);
    
        // if ((this.props.refresh !== prevProps.refresh)) {
        //     this.props.onWrapper(false);

        //     this.setState({
        //         menu: '',
        //         stats: [{
        //             startDate: null,
        //             endDate: null,
        //             key: 'selection'
        //         }],
        //         open: false,
        //         select: false
        //     })
        // }
    }
    // shouldComponentUpdate(prevProps,nextProps) {
    //     // Rendering the component only if 
    //     // passed props value is changed
      
    //     // if (nextProps.value !== this.props.value) {
    //     //   return true;
    //     // } else {
    //     //   return false;
    //     // }
    //     if(prevProps.sortActive !== this.props.sortActive) {
    //         this.setState({
    //             arrowToggle: true,
    //             arrowActive:'down',
    //             activity:false
    //         })
    //         return true;
    //     } else {
    //         return false
    //     }
    // }
    open = (e) => {
        // console.log({ru})
        this.setState({
            open: true,
            arrowToggle:true
        })
        this.refBlock.current.closest('.wrapper-scroll .scroll').style.overflowY = 'hidden';
        // timer = setTimeout(() => {
        //     this.props.setRange(false)
        // }, 600);
    }

    close = (e) => {
        if(!this.props.wrapper){
            this.setState({
                open: false,
                arrowToggle:false
    
            })
            this.refBlock.current.closest('.wrapper-scroll .scroll').style.overflowY = 'scroll';
        }

        // if (!this.props.wrapper)
        //     this.props.setRange(true)
    }

    // onClick = e => {
    //     if (this.state.sort === '' || this.state.sort === 'down') {
    //         this.setState({ sort: 'up' })
    //     } else if (this.state.sort === 'up') {
    //         this.setState({ sort: 'down' })
    //     }
    //     this.props.onWrapper(false);
    //     this.setState({ open: false, select: false })

    // }
    // useEffect(() => {
	// 	setArrowActive('down');
	// 	setArrowToggle(false);
	// 	setActivity(false);
	// }, [sortActive]);
	sortClickBtn(e) {
		// setHideMenu(false);
        this.props.setHideMenu(false);
		if (this.state.arrowActive === 'down') {
			// setArrowActive('up');
            this.setState({
                arrowActive: 'up'
            })
		} else if (this.state.arrowActive === 'up') {
			// setArrowActive('down');
            this.setState({
                arrowActive: 'down'
            })
		}
		this.props.setSortActive(!this.props.sortActive);
        this.refBlock.current.closest('.wrapper-scroll .scroll').style.overflowY = 'scroll';
        this.refBlock.current.closest('.wrapper-scroll').querySelector('.track-vertical').style.opacity = 1;
        this.refBlock.current.closest('.wrapper-scroll').querySelector('.track-horizontal').style.opacity = 1;
        this.setState({
                arrowToggle: true,
                activity: true
            })
		// setTimeout(() => {
		// 	// setActivity(true);
		// 	// setArrowToggle(true);
        //     this.setState({
        //         arrowToggle: true,
        //         activity: true
        //     })
        //     // this.setState({
                
        //     // })
		// 	if (this.state.arrowActive === 'down') {
		// 		// setArrowActive('up');
        //         this.setState({
        //             arrowActive: 'up'
        //         })
		// 	} else {
        //         this.setState({
        //             arrowActive: 'down'
        //         })
		// 	}
		// }, 0);

     
        

        
        this.props.onWrapper(false);
	}
    render() {
        return (
            <div className={`calendary-block ${this.props.hideMenu && !this.state.open ? 'hide-menu': ""}`} ref={this.refBlock} style={{ height: 20,textAlign:'left' }} onMouseEnter={this.open} onMouseLeave={this.close}>
                <input type="text" style={{ textOverflow: 'ellipsis', border: 'none', padding: 0, height: 20, width: `${this.state.arrowToggle || this.state.activity || (this.state.arrowToggle && this.state.activity) ? 'calc(100% - 15px)': '101%'}`, color: 'rgba(0, 0, 0, 0.5)', textAlign: 'left', boxSizing: 'border-box', fontWeight: 300, cursor: 'default', outline: 'none' }} readOnly value={this.state.stats[0].startDate !== null ? format(this.state.stats[0].startDate, 'dd.MM.yyyy') + '-' + format(this.state.stats[0].endDate, 'dd.MM.yyyy') : ''} />
                <span style={{
                    width: 'calc(100% - 10px)',
                    backgroundColor: '#9c9b9e',
                    height: '1px',
                    bottom: '2px',
                    left: 0,
                    zIndex: 4,
                    position: 'absolute'

                }}></span>
                <div
                    // onMouseEnter={tooltipOn}
                    // onMouseLeave={tooltipOff}
                    className={`sortBtn ${this.state.arrowToggle || this.state.activity || (this.state.arrowToggle && this.state.activity)
                            ? 'on'
                            : ''
                        }`}
                    onClick={this.sortClickBtn}
                >
                    <svg
                        width="10"
                        height="10"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={
                            this.state.arrowActive === 'down'
                                ? {}
                                : this.state.arrowActive === 'up'
                                    ? { transform: 'scaleY(-1) scale(1) translateX(0px) translateY(0px)' }
                                    : { transform: 'scaleY(-1) scale(1) translateX(0px) translateY(0px)' }
                        }
                    >
                        <path
                            d="M3.37459 0.240197L0 3.06626L1.14931 4.49643L3.07879 2.83706L3.07655 12H4.90818L4.91062 2.83589L6.84264 4.49525L7.99196 3.06508L4.61609 0.240197C4.21951 -0.079919 3.77147 -0.080212 3.37459 0.240197ZM9.16119 8.15695C9.65816 8.15695 10.0603 7.74553 10.0603 7.23743C10.0603 6.72932 9.65816 6.3179 9.16119 6.3179H7.08288V8.15695H9.16119ZM10.6748 11.5357C11.1716 11.5357 11.5739 11.1243 11.5739 10.6162C11.5739 10.1081 11.1716 9.69679 10.6748 9.69679H7.08298V11.5357H10.6748Z"
                            fill="black"
                        ></path>
                    </svg>
                </div>
                <div className={((this.state.open) || (this.props.wrapper && this.state.select)) ? "datarangepicker toggle-range" : "datarangepicker"}>
                    {(this.state.open || (this.props.wrapper && this.state.select)) && <DateRangePicker
                        onChange={item => {
                            this.setState({
                                stats: [item.selection]
                            })
                            // this.props.search[this.props.keys] = format(item.selection.startDate, 'dd.MM.yyyy') + '-' + format(item.selection.endDate, 'dd.MM.yyyy')
                        }}
                        months={1}
                        locale={ru}
                        weekStartsOn={1}
                        menu={this.state.menu}
                        changeMenu={e => this.setState({ menu: e })}
                        minDate={addDays(new Date(), -1827)}
                        maxDate={addDays(new Date(), 0)}
                        direction="vertical"
                        scroll={{ enabled: true }}
                        ranges={this.state.stats}
                    />}
                </div>
            </div>
        )
    }

}


export default Calendar;