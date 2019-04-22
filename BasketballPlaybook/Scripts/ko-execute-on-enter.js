/// <reference path="knockout-3.5.0.debug.js" />
/// <reference path="jquery-3.3.1.js" />

ko.bindingHandlers.executeOnEnter = {
    init: function (element, valueAccessor, allBindingAccessor, viewModel) {
        var value = valueAccessor();
        $(element).keypress(function (event) {
            var keyCode = (event.which ? event.which : event.keycode);
            if (keyCode === 13) {
                value.call(viewModel);
                return false;
            }
            return true;
        });
    }
}