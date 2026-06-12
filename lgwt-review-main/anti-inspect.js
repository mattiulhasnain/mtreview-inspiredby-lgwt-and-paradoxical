// Shortcut-only redirect to the restricted page.
(function () {
    'use strict';

    const RESTRICTED_PAGE = 'restricted.html';
    let redirected = false;

    function redirectToRestricted() {
        if (redirected) return;
        redirected = true;
        try {
            window.location.replace(RESTRICTED_PAGE);
        } catch (err) {
            window.location.href = RESTRICTED_PAGE;
        }
    }

    function shouldRedirect(event) {
        const key = (event.key || '').toLowerCase();
        const ctrlOrCmd = event.ctrlKey || event.metaKey;

        if (key === 'f12') return true;
        if (ctrlOrCmd && event.shiftKey && ['i', 'j', 'c', 'k', 'p'].includes(key)) return true;
        if (ctrlOrCmd && ['u'].includes(key)) return true;
        return false;
    }

    function blockInteraction(event) {
        try {
            event.preventDefault();
            event.stopImmediatePropagation();
        } catch (err) {}
        return false;
    }

    document.addEventListener('keydown', function (event) {
        if (!shouldRedirect(event)) return;
        blockInteraction(event);
        redirectToRestricted();
    }, true);

    ['contextmenu', 'copy', 'cut', 'paste', 'selectstart', 'dragstart'].forEach(function (eventName) {
        document.addEventListener(eventName, blockInteraction, true);
    });
})();