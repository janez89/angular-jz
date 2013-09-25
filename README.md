angular-jz
==========

directives for angular js

* uniqueData validator
* compareData validator

***

### Usage

```javascript
// in app js use module
var app = angular.module('myApp', ['jz-validators']);
```


#### unique data validator usage:

```html
<input type="text" name="username" 
    ng-model="user.username" unique-data="/check_username=%s" />
    
<p class="error" ng-show="form.username.$error.uniqueData">The username already taken.</p>
```

> Server side response <br>
> for validation error: <br>
> with status 4xx <br>
> with JSON response: { ok: false } OR { err: true } <br>

> for success validation: <br>
> { ok: true }

#### compare data validator usage:

```html
<input type="password" name="password"
    ng-model="user.password" ... />

<input type="password" name="password2"
    ng-model="user.password2" compare-data="password" />
    
<p class="error" ng-show="form.password2.$error.compareData">The passwords do not match.</p>
```