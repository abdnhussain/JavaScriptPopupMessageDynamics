
function AccountOnLoad() {
    if (Xrm.Page.getAttribute("mobilephone").getValue() == null && Xrm.Page.getAttribute("emailaddress1").getValue() == null ) {
        var confirmStrings = { text: "Mobile Phone has less than 10 digits.", title: "Mobile Phone Validation" };
        var confirmOptions = { height: 200, width: 450 };

        Xrm.Navigation.openConfirmDialog(confirmStrings, confirmOptions).then(
            function (success) {
                if (success.confirmed)
                    console.log("Dialog closed using OK button.");
                else
                    console.log("Dialog closed using Cancel button or X.");
            });
    }
}


this.onChange_MobilePhone = function () {
    //var formContext = executionContext.getFormContext();
    var mobilePhone = formContext.getAttribute("mobilephone").getValue();
    if (mobilePhone != null && mobilePhone.length < 10) {

        var confirmStrings = { text: "Mobile Phone has less than 10 digits.", title: "Mobile Phone Validation" };
        var confirmOptions = { height: 200, width: 450 };

        Xrm.Navigation.openConfirmDialog(confirmStrings, confirmOptions).then(
            function (success) {
                if (success.confirmed)
                    console.log("Dialog closed using OK button.");
                else
                    console.log("Dialog closed using Cancel button or X.");
            });
    }
}
