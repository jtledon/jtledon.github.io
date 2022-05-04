"use strict"

function test() {
    console.log("the js file is being imported")
}

function CopyToClipboard(self) {
    let log_text = self.children[0].value
    let clipboard_text = self.children[1].value

    // TODO: give a nice custom alert box that you copied the specific text to the clipboard
    // Should disappear after like 3 seconds without any user input
    navigator.clipboard.writeText(clipboard_text).then(function () {
        Swal.fire({
            position: 'top',
            // icon: 'success',
            title: 'Copied to clipboard',
            html: "Copied Jason Ledon's " + log_text + " to your clipboard",
            showConfirmButton: false,
            // backdrop: false,
            timerProgressBar: true,
            timer: 1500,
          })
    }, function () {
        Swal.fire({
            position: 'top',
            icon: 'error',
            title: 'Failed to copy to clipboard',
            html: "Failed to copy Jason Ledon's " + log_text + " to your clipboard. Check clipboard permissons.",
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 4000,
          })
    });
}