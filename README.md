# Can't request debugger optional permission in Chrome extension

Chrome version: `Version 124.0.6367.60 (Official Build) (x86_64)`
OS: MacOS 14.3.1

## How to reproduce
1. Install the extension.
1. Open Service Worker Inspector.
1. Click on the "'debugger' permission request" button.
1. Observe

## Observed behavior

Error below is thrown in the console:
```
Only permissions specified in the manifest may be requested
```

and the permission request is Denied.


## Expected behavior

The permission is granted.

## References
- requesting permissions - [api/permissions#method-request](https://developer.chrome.com/docs/extensions/reference/api/permissions#method-request)
- optional permissions implementation -  [api/permissions#implement_optional_permissions](https://developer.chrome.com/docs/extensions/reference/api/permissions#implement_optional_permissions)
- debugger API - [api/debugger](https://developer.chrome.com/docs/extensions/reference/api/debugger).
- permissions list triggering warnings - [reference/permissions-list](https://developer.chrome.com/docs/extensions/reference/permissions-list).

## Loom
https://www.loom.com/share/b34c8976dd434c15a4343317b3a4a6c8
