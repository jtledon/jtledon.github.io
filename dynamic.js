"use strict"

function test() {
    console.log("the js file is being imported")
}

function CopyToClipboard(self) {
    let log_text = self.firstElementChild.value
    let clipboard_text = self.lastElementChild.textContent

    // TODO: give a nice custom alert box that you copied the specific text to the clipboard
    // Should disappear after like 3 seconds without any user input
    navigator.clipboard.writeText(clipboard_text).then(function () {
        Swal.fire({
            position: 'top',
            // icon: 'success',
            title: 'Copied to clipboard',
            html: "Copied Jason Ledon's " + log_text + " to your clipboard",
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 2000,
          })
    }, function () {
        Swal.fire({
            position: 'top',
            icon: 'warning',
            title: 'Failed to copy to clipboard',
            html: "Failed to copy Jason Ledon's " + log_text + " to your clipboard. Check clipboard permissons.",
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 4000,
          })
    });
}