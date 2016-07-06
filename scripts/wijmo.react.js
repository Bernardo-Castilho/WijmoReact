/**
 * Wijmo React interop module.
 */
var wijmo;
(function (wijmo) {
    var react;
    (function (react) {
        // gets the control associated with a component
        function getControl(component) {
            var el = ReactDOM.findDOMNode(component);
            return wijmo.Control.getControl(el);
        }
        react.getControl = getControl;
        // mounts a new control onto a component
        function mount(component, controlType) {
            // instantiate the control
            var el = ReactDOM.findDOMNode(component), control = new controlType(el);
            // add class names to host element (React uses 'className' instead of just 'class')
            if (component.props.className) {
                wijmo.addClass(el, component.props.className);
            }
            // initialize the control with properties and event handlers
            var props = {};
            for (var prop in component.props) {
                if (prop in control) {
                    props[prop] = component.props[prop];
                }
            }
            control.initialize(props);
            // update 'xxx' properties in response to 'xxxChanged' events
            for (var prop in control) {
                if (!prop.match(/disabled|required/)) {
                    var event = control[prop];
                    if (event instanceof wijmo.Event) {
                        var m = prop.match(/(\w+)Changed/);
                        if (m && m.length) {
                            prop = m[1];
                            if (control[prop] != null && component.props[prop] != null) {
                                event.addHandler(_update.bind({
                                    component: component,
                                    control: control,
                                    prop: prop
                                }));
                            }
                        }
                    }
                }
            }
            // fire initialize event
            var initialized = component.props['initialized'];
            if (wijmo.isFunction(initialized)) {
                initialized(control);
            }
            // done creating the control
            return control;
        }
        react.mount = mount;
        // update component value to match control's
        function _update() {
            this.component[this.prop] = this.control[this.prop];
        }
        // disposes of the control associated with a component
        function unmount(component) {
            getControl(this).dispose();
        }
        react.unmount = unmount;
        // updates the control properties to match its associated component
        function update(component, nextProps) {
            var ctl = getControl(component);
            for (var prop in nextProps) {
                var value = nextProps[prop];
                if (prop in ctl && !_sameValue(ctl[prop], value) && wijmo.isPrimitive(value)) {
                    ctl[prop] = value;
                }
            }
            return false;
        }
        react.update = update;
        // compares two objects by value
        function _sameValue(v1, v2) {
            return v1 == v2 || wijmo.DateTime.equals(v1, v2);
        }
    })(react = wijmo.react || (wijmo.react = {}));
})(wijmo || (wijmo = {}));
// ** wijmo.input components
var WjAutoComplete = React.createClass({
    render: function () {
        return React.createElement('div');
    },
    componentDidMount: function () {
        wijmo.react.mount(this, wijmo.input.AutoComplete);
    },
    componentWillUnmount: function () {
        wijmo.react.unmount(this);
    },
    shouldComponentUpdate: function (nextProps, nextState) {
        return wijmo.react.update(this, nextProps);
    }
});
var WjCalendar = React.createClass({
    render: function () {
        return React.createElement('div');
    },
    componentDidMount: function () {
        wijmo.react.mount(this, wijmo.input.Calendar);
    },
    componentWillUnmount: function () {
        wijmo.react.unmount(this);
    },
    shouldComponentUpdate: function (nextProps, nextState) {
        return wijmo.react.update(this, nextProps);
    }
});
var WjColorPicker = React.createClass({
    render: function () {
        return React.createElement('div');
    },
    componentDidMount: function () {
        wijmo.react.mount(this, wijmo.input.ColorPicker);
    },
    componentWillUnmount: function () {
        wijmo.react.unmount(this);
    },
    shouldComponentUpdate: function (nextProps, nextState) {
        return wijmo.react.update(this, nextProps);
    }
});
var WjComboBox = React.createClass({
    render: function () {
        return React.createElement('div');
    },
    componentDidMount: function () {
        wijmo.react.mount(this, wijmo.input.ComboBox);
    },
    componentWillUnmount: function () {
        wijmo.react.unmount(this);
    },
    shouldComponentUpdate: function (nextProps, nextState) {
        return wijmo.react.update(this, nextProps);
    }
});
var WjInputColor = React.createClass({
    render: function () {
        return React.createElement('div');
    },
    componentDidMount: function () {
        wijmo.react.mount(this, wijmo.input.InputColor);
    },
    componentWillUnmount: function () {
        wijmo.react.unmount(this);
    },
    shouldComponentUpdate: function (nextProps, nextState) {
        return wijmo.react.update(this, nextProps);
    }
});
var WjInputDate = React.createClass({
    render: function () {
        return React.createElement('div');
    },
    componentDidMount: function () {
        wijmo.react.mount(this, wijmo.input.InputDate);
    },
    componentWillUnmount: function () {
        wijmo.react.unmount(this);
    },
    shouldComponentUpdate: function (nextProps, nextState) {
        return wijmo.react.update(this, nextProps);
    }
});
var WjInputDateTime = React.createClass({
    render: function () {
        return React.createElement('div');
    },
    componentDidMount: function () {
        wijmo.react.mount(this, wijmo.input.InputDateTime);
    },
    componentWillUnmount: function () {
        wijmo.react.unmount(this);
    },
    shouldComponentUpdate: function (nextProps, nextState) {
        return wijmo.react.update(this, nextProps);
    }
});
var WjInputMask = React.createClass({
    render: function () {
        return React.createElement('div');
    },
    componentDidMount: function () {
        wijmo.react.mount(this, wijmo.input.InputMask);
    },
    componentWillUnmount: function () {
        wijmo.react.unmount(this);
    },
    shouldComponentUpdate: function (nextProps, nextState) {
        return wijmo.react.update(this, nextProps);
    }
});
var WjInputNumber = React.createClass({
    render: function () {
        return React.createElement('div');
    },
    componentDidMount: function () {
        wijmo.react.mount(this, wijmo.input.InputNumber);
    },
    componentWillUnmount: function () {
        wijmo.react.unmount(this);
    },
    shouldComponentUpdate: function (nextProps, nextState) {
        return wijmo.react.update(this, nextProps);
    }
});
var WjInputTime = React.createClass({
    render: function () {
        return React.createElement('div');
    },
    componentDidMount: function () {
        wijmo.react.mount(this, wijmo.input.InputTime);
    },
    componentWillUnmount: function () {
        wijmo.react.unmount(this);
    },
    shouldComponentUpdate: function (nextProps, nextState) {
        return wijmo.react.update(this, nextProps);
    }
});
var WjListBox = React.createClass({
    render: function () {
        return React.createElement('div');
    },
    componentDidMount: function () {
        wijmo.react.mount(this, wijmo.input.ListBox);
    },
    componentWillUnmount: function () {
        wijmo.react.unmount(this);
    },
    shouldComponentUpdate: function (nextProps, nextState) {
        return wijmo.react.update(this, nextProps);
    }
});
var WjMultiSelect = React.createClass({
    render: function () {
        return React.createElement('div');
    },
    componentDidMount: function () {
        wijmo.react.mount(this, wijmo.input.MultiSelect);
    },
    componentWillUnmount: function () {
        wijmo.react.unmount(this);
    },
    shouldComponentUpdate: function (nextProps, nextState) {
        return wijmo.react.update(this, nextProps);
    }
});
// ** wijmo.grid components
var WjFlexGrid = React.createClass({
    render: function () {
        return React.createElement('div');
    },
    componentDidMount: function () {
        wijmo.react.mount(this, wijmo.grid.FlexGrid);
    },
    componentWillUnmount: function () {
        wijmo.react.unmount(this);
    }
});
// ** wijmo.chart components
var WjFlexChart = React.createClass({
    render: function () {
        return React.createElement('div');
    },
    componentDidMount: function () {
        wijmo.react.mount(this, wijmo.chart.FlexChart);
    },
    componentWillUnmount: function () {
        wijmo.react.unmount(this);
    }
});
// ** wijmo.gauge components
var WjLinearGauge = React.createClass({
    render: function () {
        return React.createElement('div');
    },
    componentDidMount: function () {
        wijmo.react.mount(this, wijmo.gauge.LinearGauge);
    },
    componentWillUnmount: function () {
        wijmo.react.unmount(this);
    },
    shouldComponentUpdate: function (nextProps, nextState) {
        return wijmo.react.update(this, nextProps);
    }
});
var WjRadialGauge = React.createClass({
    render: function () {
        return React.createElement('div');
    },
    componentDidMount: function () {
        wijmo.react.mount(this, wijmo.gauge.RadialGauge);
    },
    componentWillUnmount: function () {
        wijmo.react.unmount(this);
    },
    shouldComponentUpdate: function (nextProps, nextState) {
        return wijmo.react.update(this, nextProps);
    }
});
//# sourceMappingURL=wijmo.react.js.map