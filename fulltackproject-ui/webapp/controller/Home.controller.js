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
                const sQuery = this.getView().getModel("home").getProperty("/search")
                let aFilter = []

                if (sQuery && sQuery.length > 0) {
                    const filter = new Filter("lastname", FilterOperator.Contains, sQuery)
                    aFilter.push(filter)
                }

                const oTable = this.getView().byId("user_table")
                const oBinding = oTable.getBinding("items")
                oBinding.filter(aFilter, "Application")
            },


            onAvvio: function () {
                const oFilterBar = this.getView().byId("filterbar")

                let aTableFilter = oFilterBar.getFilterGroupItems().reduce(function (aResult, oFilterGroupItem) {
                    const oControl = oFilterGroupItem.getControl()
                    const aSelectedItems = oControl.getSelectedItems()
                    let aFilters = aSelectedItems.map(function (oSelectedItem) {
                        return new Filter(oFilterGroupItem.getName(), FilterOperator.Contains, oSelectedItem.getText())
                    })

                    aResult.push(
                        new Filter({
                            filters: aFilters,
                            and: false
                        })
                    )

                    return aResult

                }, [])

                const oTable = this.getView().byId("user_table")
                const oBinding = oTable.getBinding("items")
                oBinding.filter(aTableFilter, "Application")
                oTable.setShowOverlay(false)
            }

        });
    });
