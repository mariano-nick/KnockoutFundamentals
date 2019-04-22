/// <reference path="knockout-3.5.0.debug.js />
/// <reference path="jquery-3.3.1.js/>



$(function () {
    $("#tagDialog").hide();

    var data = [
        new tagItem("Ball Handling", 1),
        new tagItem("Passing", 2),
        new tagItem("Shooting", 3),
        new tagItem("Rebounding", 4),
        new tagItem("Transition", 5),
        new tagItem("Defense", 6),
        new tagItem("Team Offense", 7),
        new tagItem("Team Defense", 8)
    ];

    function tagItem(name, id) {
        return {
            Name: ko.observable(name),
            Id: ko.observable(id)
        };
    }

    var viewModel = {
        // data
        tags: ko.observableArray(data),
        tagToAdd: ko.observable(""),
        selectedTag: ko.observable(null),

        // behaviors
        addTag: function () {
            var name = this.tagToAdd();
            this.tags.push({ Name: name });
            this.tagToAdd("");
        },

        selectTag: function () {
            console.log("inside selectTag");
            viewModel.selectedTag(this);
        }
        //,

        //addOnEnter: function (data, event) {
        //    var keyCode = (event.which ? event.which : event.keyCode);
        //    if (keyCode === 13) {
        //        viewModel.addTag();
        //    }
        //    return true;
        //}

    };


    $(document).on("click", ".tag-delete", function () {
        var itemToRemove = ko.dataFor(this);
        viewModel.tags.remove(itemToRemove);
    });

    $(document).on("click", ".tag-edit", function () {
        $("#tagDialog").dialog({
            buttons: {
                Save: function () { $(this).dialog("close"); },
                Cancel: function () { $(this).dialog("close"); }
            }
        });
    });

    ko.applyBindings(viewModel);
});

