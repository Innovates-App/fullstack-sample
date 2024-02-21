sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Filter, FilterOperator) {
        "use strict";

        return Controller.extend("fulltackprojectui.controller.Home", {
            onInit: function () {

            },

            onSearch: function (oEvent) {
                let aFilters = [];
                const sQuery = this.getView().getModel("home").getProperty("/search")

                // var sQuery = oEvent.getSource().getValue();
                if (sQuery && sQuery.length > 0) {
                    let filter = new Filter("firstname", FilterOperator.Contains, sQuery);
                    aFilters.push(filter);
                }
                const oTable = this.byId("Table");
                const oBinding = oTable.getBinding("items");
                oBinding.filter(aFilters, "Application");
            },

            onAvvio: function () {
                const oFilterBar = this.getView().byId("filterbar")

                const aTableFilters = oFilterBar.getFilterGroupItems().reduce(function (aResult, oFilterGroupItem) {
                    const oControl = oFilterGroupItem.getControl()
                    const aSelectedItems = oControl.getSelectedItems()
                    let aFilters = aSelectedItems.map(function (sSelectedItem) {
                        return new Filter({
                            path: oFilterGroupItem.getName(),
                            operator: FilterOperator.Contains,
                            value1: sSelectedItem.getText()
                        });
                    });

                    if (aSelectedItems.length > 0) {
                        aResult.push(new Filter({
                            filters: aFilters,
                            and: false
                        }));
                    }

                    return aResult;
                }, []);

                const oTable = this.getView().byId("Table")
                oTable.getBinding("items").filter(aTableFilters);
                oTable.setShowOverlay(false);
            },


        });
    });
