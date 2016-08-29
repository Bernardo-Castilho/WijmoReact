/*
    *
    * Wijmo Library 5.20162.201
    * http://wijmo.com/
    *
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    *
    * Licensed under the Wijmo Commercial License.
    * sales@wijmo.com
    * http://wijmo.com/products/wijmo-5/license/
    *
    */
/**
 * Wijmo interop module for <a href="https://facebook.github.io/react/">React</a>.
 *
 * This module provides React components that encapsulate Wijmo controls.
 *
 * To use it, your application must include references to the React and
 * ReactDOM libraries, as well as the regular Wijmo CSS and js files.
 *
 * To add Wijmo controls to React components, include the appropriate
 * tags in your JSX (or TSX) files. For example, the code below adds
 * an @see:InputNumber control to a React component:
 *
 * <pre>&lt;label htmlFor="inputnumber"&gt;Here's an InputNumber control:&lt;/label&gt;
 * &lt;Wj.InputNumber
 *   id="inputNumber"
 *   format="c2"
 *   min={ 0 } max={ 10 } step={ .5 }
 *   value={ this.state.value }
 *   valueChanged={ this.valueChanged }/&gt;</pre>
 *
 * The example illustrates the following important points:
 *
 * <ol>
 *   <li>
 *      Wijmo controls have tag names that start with the "Wj" prefix, followed by
 *      the control name. The "Wj" is a shorthand for the full module name
 *      "wijmo.react" which can also be used.</li>
 * <li>
 *      The tag attribute names match the control's properties and events.</li>
 * <li>
 *      Attribute values enclosed in quotes are interpreted as strings, and
 *      values enclosed in curly braces are interpreted as JavaScript expressions.</li>
 * <li>
 *      React components do not have implicit two-way bindings, so controls that
 *      modify values typically use event handlers to explicitly apply changes to
 *      the parent component's state.</li>
 * </ol>
 *
 * To illustrate this last point, the component that contains the markup given above
 * would typically implement a "valueChanged" event handler as follows:
 *
 * <pre>valueChanged: function(s, e) {
 *   this.setState({ value, s.value });
 * }</pre>
 *
 * The event handler calls React's
 * <a href="https://facebook.github.io/react/docs/component-api.html">setState</a>
 * method to update the component state, automatically triggering a UI update.
 * Notice that the method does not write directly into the "state" object, which
 * should be treated as immutable in React applications.
 */
var wijmo;
(function (wijmo) {
    var react;
    (function (react) {
        // ** wijmo.input components
        /**
         * React component that encapsulates the @see:wijmo.input.AutoComplete control.
         */
        react.AutoComplete = React.createClass({
            render: function () {
                return React.createElement('div');
            },
            componentDidMount: function () {
                _mount(this, wijmo.input.AutoComplete);
            },
            componentWillUnmount: function () {
                _unmount(this);
            },
            shouldComponentUpdate: function (nextProps, nextState) {
                return _updateControl(this, nextProps);
            }
        });
        /**
         * React component that encapsulates the @see:wijmo.input.Calendar control.
         */
        react.Calendar = React.createClass({
            render: function () {
                return React.createElement('div');
            },
            componentDidMount: function () {
                _mount(this, wijmo.input.Calendar);
            },
            componentWillUnmount: function () {
                _unmount(this);
            },
            shouldComponentUpdate: function (nextProps, nextState) {
                return _updateControl(this, nextProps);
            }
        });
        /**
         * React component that encapsulates the @see:wijmo.input.ColorPicker control.
         */
        react.ColorPicker = React.createClass({
            render: function () {
                return React.createElement('div');
            },
            componentDidMount: function () {
                _mount(this, wijmo.input.ColorPicker);
            },
            componentWillUnmount: function () {
                _unmount(this);
            },
            shouldComponentUpdate: function (nextProps, nextState) {
                return _updateControl(this, nextProps);
            }
        });
        /**
         * React component that encapsulates the @see:wijmo.input.ComboBox control.
         */
        react.ComboBox = React.createClass({
            render: function () {
                return React.createElement('div');
            },
            componentDidMount: function () {
                _mount(this, wijmo.input.ComboBox);
            },
            componentWillUnmount: function () {
                _unmount(this);
            },
            shouldComponentUpdate: function (nextProps, nextState) {
                return _updateControl(this, nextProps);
            }
        });
        /**
         * React component that encapsulates the @see:wijmo.input.Menu control.
         */
        react.Menu = React.createClass({
            render: function () {
                return React.createElement('div');
            },
            componentDidMount: function () {
                _mount(this, wijmo.input.Menu);
            },
            componentWillUnmount: function () {
                _unmount(this);
            },
            shouldComponentUpdate: function (nextProps, nextState) {
                return _updateControl(this, nextProps);
            }
        });
        /**
         * React component that encapsulates the @see:wijmo.input.InputColor control.
         */
        react.InputColor = React.createClass({
            render: function () {
                return React.createElement('div');
            },
            componentDidMount: function () {
                _mount(this, wijmo.input.InputColor);
            },
            componentWillUnmount: function () {
                _unmount(this);
            },
            shouldComponentUpdate: function (nextProps, nextState) {
                return _updateControl(this, nextProps);
            }
        });
        /**
         * React component that encapsulates the @see:wijmo.input.InputDate control.
         */
        react.InputDate = React.createClass({
            render: function () {
                return React.createElement('div');
            },
            componentDidMount: function () {
                _mount(this, wijmo.input.InputDate);
            },
            componentWillUnmount: function () {
                _unmount(this);
            },
            shouldComponentUpdate: function (nextProps, nextState) {
                return _updateControl(this, nextProps);
            }
        });
        /**
         * React component that encapsulates the @see:wijmo.input.InputDateTime control.
         */
        react.InputDateTime = React.createClass({
            render: function () {
                return React.createElement('div');
            },
            componentDidMount: function () {
                _mount(this, wijmo.input.InputDateTime);
            },
            componentWillUnmount: function () {
                _unmount(this);
            },
            shouldComponentUpdate: function (nextProps, nextState) {
                return _updateControl(this, nextProps);
            }
        });
        /**
         * React component that encapsulates the @see:wijmo.input.InputMask control.
         */
        react.InputMask = React.createClass({
            render: function () {
                return React.createElement('div');
            },
            componentDidMount: function () {
                _mount(this, wijmo.input.InputMask);
            },
            componentWillUnmount: function () {
                _unmount(this);
            },
            shouldComponentUpdate: function (nextProps, nextState) {
                return _updateControl(this, nextProps);
            }
        });
        /**
         * React component that encapsulates the @see:wijmo.input.InputNumber control.
         */
        react.InputNumber = React.createClass({
            render: function () {
                return React.createElement('div');
            },
            componentDidMount: function () {
                _mount(this, wijmo.input.InputNumber);
            },
            componentWillUnmount: function () {
                _unmount(this);
            },
            shouldComponentUpdate: function (nextProps, nextState) {
                return _updateControl(this, nextProps);
            }
        });
        /**
         * React component that encapsulates the @see:wijmo.input.InputTime control.
         */
        react.InputTime = React.createClass({
            render: function () {
                return React.createElement('div');
            },
            componentDidMount: function () {
                _mount(this, wijmo.input.InputTime);
            },
            componentWillUnmount: function () {
                _unmount(this);
            },
            shouldComponentUpdate: function (nextProps, nextState) {
                return _updateControl(this, nextProps);
            }
        });
        /**
         * React component that encapsulates the @see:wijmo.input.ListBox control.
         */
        react.ListBox = React.createClass({
            render: function () {
                return React.createElement('div');
            },
            componentDidMount: function () {
                _mount(this, wijmo.input.ListBox);
            },
            componentWillUnmount: function () {
                _unmount(this);
            },
            shouldComponentUpdate: function (nextProps, nextState) {
                return _updateControl(this, nextProps);
            }
        });
        /**
         * React component that encapsulates the @see:wijmo.input.MultiSelect control.
         */
        react.MultiSelect = React.createClass({
            render: function () {
                return React.createElement('div');
            },
            componentDidMount: function () {
                _mount(this, wijmo.input.MultiSelect);
            },
            componentWillUnmount: function () {
                _unmount(this);
            },
            shouldComponentUpdate: function (nextProps, nextState) {
                return _updateControl(this, nextProps);
            }
        });
        /**
         * React component that encapsulates the @see:wijmo.input.Popup control.
         */
        react.Popup = React.createClass({
            render: function () {
                return React.createElement('div', null, this.props.children);
            },
            componentDidMount: function () {
                _mount(this, wijmo.input.Popup);
            },
            componentWillUnmount: function () {
                _unmount(this);
            },
            shouldComponentUpdate: function (nextProps, nextState) {
                return _updateControl(this, nextProps);
            }
        });
        // ** wijmo.grid components
        /**
         * React component that encapsulates the @see:wijmo.grid.FlexGrid control.
         *
         * The example below shows how to instantiate and initialize a
         * @see:wijmo.grid.FlexGrid control in JSX:
         *
         * <pre>&lt;Wj.FlexGrid
         *   autoGenerateColumns={ false }
         *   columns={[
         *     { binding: 'name', header: 'Name' },
         *     { binding: 'sales', header: 'Sales', format: 'c0' },
         *     { binding: 'expenses', header: 'Expenses', format: 'c0' },
         *     { binding: 'active', header: 'Active' },
         *     { binding: 'date', header: 'Date' }
         *   ]}
         *   itemsSource={ this.state.data } /&gt;</pre>
         *
         * The code sets the <b>autoGenerateColumns</b> property to false, then
         * sets the <b>columns</b> property, and finally sets the <b>itemsSource</b>
         * property. This order is important, it prevents the grid from automatically
         * generating the columns.
         */
        react.FlexGrid = React.createClass({
            render: function () {
                return React.createElement('div');
            },
            componentDidMount: function () {
                _mount(this, wijmo.grid.FlexGrid);
            },
            componentWillUnmount: function () {
                _unmount(this);
            },
            shouldComponentUpdate: function (nextProps, nextState) {
                return _updateControl(this, nextProps);
            }
        });
        // ** wijmo.chart components
        /**
         * React component that encapsulates the @see:wijmo.chart.FlexChart control.
         *
         * The example below shows how to instantiate and initialize a
         * @see:wijmo.chart.FlexChart control in JSX:
         *
         * <pre>&lt;Wj.FlexChart
         *   itemsSource={ this.state.data }
         *   bindingX="name"
         *   header={ this.state.header }
         *   footer={ this.state.footer }
         *   axisX={&#8203;{ title: this.state.titleX }}
         *   axisY={&#8203;{ title: this.state.titleY }}
         *   legend={&#8203;{ position: this.state.legendPosition }}
         *   series={[
         *       { name: 'Sales', binding: 'sales' },
         *       { name: 'Expenses', binding: 'expenses' },
         *       { name: 'Downloads', binding: 'downloads', chartType: 'LineSymbols' }
         *   ]} /&gt;</pre>
         *
    
         * The code sets the <b>itemsSource</b> property to a collection that contains
         * the data to chart and the <b>bindingX</b> property to specify the name of the
         * data property to use for the chart's X values.
         *
         * It sets the <b>header</b> and <b>footer</b> properties to specify the
         * chart titles, and customizes the chart's axes and legend.
         *
         * Finally, it sets the <b>series</b> property to an array that specifies the
         * data items that the chart should display.
         */
        react.FlexChart = React.createClass({
            render: function () {
                return React.createElement('div');
            },
            componentDidMount: function () {
                _mount(this, wijmo.chart.FlexChart);
            },
            componentWillUnmount: function () {
                _unmount(this);
            },
            shouldComponentUpdate: function (nextProps, nextState) {
                return _updateControl(this, nextProps);
            }
        });
        // ** wijmo.gauge components
        /**
         * React component that encapsulates the @see:wijmo.gauge.LinearGauge control.
         *
         * The example below shows how to instantiate and initialize a
         * @see:wijmo.gauge.LinearGauge control in JSX:
         *
         * <pre>&lt;Wj.LinearGauge
         *   min={ 0 } max={ 1000 } step={ 50 } isReadOnly={ false }
         *   value={ this.state.view.currentItem.sales }
         *   valueChanged={ this.salesChanged }
         *   format="c0" thumbSize={ 20 } showRanges={ false }
         *   face={&#8203;{ thickness:0.5 }}
         *   pointer={&#8203;{ thickness:0.5 }}
         *   ranges={[
         *       { min: 0, max: 333, color: 'red' },
         *       { min: 333, max: 666, color: 'gold' },
         *       { min: 666, max: 1000, color: 'green' }
         *   ]} /&gt;</pre>
         *
         * The code <b>min</b>, <b>max</b>, <b>step</b>, and <b>isReadOnly</b> properties
         * to define the range of the gauge and to allow users to edit its value.
         * Next, it sets the <b>value</b> and <b>valueChanged</b> properties to create
         * a two-way binding for the gauge's value.
         *
         * Then it sets the <b>format</b>, <b>thumbSize</b>, and <b>showRanges</b>
         * properties to define the appearance of the gauge. Finally, the markup sets
         * the thickness of the <b>face</b> and <b>pointer</b> ranges, and extra ranges
         * that will control the color of the <b>value</b> range depending on the gauge's
         * current value.
         */
        react.LinearGauge = React.createClass({
            render: function () {
                return React.createElement('div');
            },
            componentDidMount: function () {
                _mount(this, wijmo.gauge.LinearGauge);
            },
            componentWillUnmount: function () {
                _unmount(this);
            },
            shouldComponentUpdate: function (nextProps, nextState) {
                return _updateControl(this, nextProps);
            }
        });
        /**
         * React component that encapsulates the @see:wijmo.gauge.RadialGauge control.
         *
         * The example below shows how to instantiate and initialize a
         * @see:wijmo.gauge.RadialGauge control in JSX:
         *
         * <pre>&lt;Wj.RadialGauge
         *   min={ 0 } max={ 1000 } step={ 50 } isReadOnly={ false }
         *   value={ this.state.view.currentItem.sales }
         *   valueChanged={ this.salesChanged }
         *   format="c0" thumbSize={ 12 } showRanges={ false } showText="Value"
         *   face={&#8203;{ thickness:0.5 }}
         *   pointer={&#8203;{ thickness:0.5 }}
         *   ranges={[
         *       { min: 0, max: 333, color: 'red' },
         *       { min: 333, max: 666, color: 'gold' },
         *       { min: 666, max: 1000, color: 'green' }
         *   ]} /&gt;</pre>
         *
         * The code <b>min</b>, <b>max</b>, <b>step</b>, and <b>isReadOnly</b> properties
         * to define the range of the gauge and to allow users to edit its value.
         * Next, it sets the <b>value</b> and <b>valueChanged</b> properties to create
         * a two-way binding for the gauge's value.
         *
         * Then it sets the <b>format</b>, <b>thumbSize</b>, <b>showText</b>, and
         * <b>showRanges</b> properties to define the appearance of the gauge.
         * Finally, the markup sets the thickness of the <b>face</b> and <b>pointer</b>
         * ranges, and extra ranges that will control the color of the <b>value</b>
         * range depending on the gauge's current value.
         */
        react.RadialGauge = React.createClass({
            render: function () {
                return React.createElement('div');
            },
            componentDidMount: function () {
                _mount(this, wijmo.gauge.RadialGauge);
            },
            componentWillUnmount: function () {
                _unmount(this);
            },
            shouldComponentUpdate: function (nextProps, nextState) {
                return _updateControl(this, nextProps);
            }
        });
        /**
         * React component that encapsulates the @see:wijmo.gauge.BulletGraph control.
         */
        react.BulletGraph = React.createClass({
            render: function () {
                return React.createElement('div');
            },
            componentDidMount: function () {
                _mount(this, wijmo.gauge.BulletGraph);
            },
            componentWillUnmount: function () {
                _unmount(this);
            },
            shouldComponentUpdate: function (nextProps, nextState) {
                return _updateControl(this, nextProps);
            }
        });
        // ** utilities
        // gets the control associated with a component
        function _getControl(component) {
            var host = ReactDOM.findDOMNode(component);
            return wijmo.Control.getControl(host);
        }
        // mounts a new control onto a component
        function _mount(component, controlType) {
            // instantiate the control
            var host = ReactDOM.findDOMNode(component), control = new controlType(host), cprops = component.props;
            // initialize the control with properties and event handlers,
            // and the host element with the regular HTML properties
            var props = {};
            for (var prop in cprops) {
                if (prop in control) {
                    // save property to assign to control later
                    props[prop] = cprops[prop];
                }
                else {
                    // assign property to host element
                    switch (prop) {
                        case 'className':
                            wijmo.addClass(host, cprops.className);
                            break;
                        case 'style':
                            wijmo.setCss(host, cprops.style);
                            break;
                        default:
                            if (host[prop] != null) {
                                host[prop] = cprops[prop];
                            }
                            break;
                    }
                }
            }
            // apply saved props to control
            control.initialize(props);
            // fire initialize event
            if (wijmo.isFunction(cprops.initialized)) {
                cprops.initialized(control);
            }
            // done creating the control
            return control;
        }
        // disposes of the control associated with a component
        function _unmount(component) {
            _getControl(component).dispose();
        }
        // updates the control properties to match its associated component
        function _updateControl(component, nextProps) {
            var ctl = _getControl(component);
            _copy(ctl, nextProps);
            return true;
        }
        function _copy(dst, src) {
            for (var p in src) {
                var value = src[p];
                if (p in src && p != 'itemsSource' && !_sameValue(dst[p], value)) {
                    // special handling for class/style
                    if (p == 'className') {
                        if (dst.hostElement) {
                            wijmo.addClass(dst.hostElement, src[p]);
                        }
                    }
                    else if (p == 'style') {
                        if (dst.hostElement) {
                            wijmo.setCss(dst.hostElement, src[p]);
                        }
                    }
                    else if (wijmo.isPrimitive(value)) {
                        dst[p] = value;
                    }
                    else if (wijmo.isObject(value)) {
                        _copy(dst[p], src[p]);
                    }
                    else if (wijmo.isArray(value) && wijmo.isArray(dst[p])) {
                        dst = dst[p];
                        src = value;
                        if (src.length == dst.length) {
                            for (var i = 0; i < src.length; i++) {
                                _copy(dst[i], src[i]);
                            }
                        }
                    }
                }
            }
        }
        // compares two objects by value
        function _sameValue(v1, v2) {
            return v1 == v2 || wijmo.DateTime.equals(v1, v2);
        }
    })(react = wijmo.react || (wijmo.react = {}));
})(wijmo || (wijmo = {}));
// make components available through the "Wj" prefix, so users can write
// "Wj.FlexGrid" instead of "wijmo.react.FlexGrid":
var Wj = wijmo.react;
//# sourceMappingURL=wijmo.react.js.map
