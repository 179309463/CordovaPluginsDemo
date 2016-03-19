angular.module('demoList.controllers')
  .controller('contactsController', function($scope, $ionicHistory, utils) {
  
  function initView(contact) {
    if(!contact) {
      $scope.contact = {
        name    : "Ryouaki",
        tel     : "13940923382",
        email   : "46517115@qq.com",
        address : "China,Liaoning,Dalian",
        photo   : "img/logo.png"
      }
    } else {
      $scope.contact = {
        name    : contact.name?contact.name.formatted:"",
        tel     : contact.phoneNumbers?contact.phoneNumbers[0].value:"",
        email   : contact.emails?contact.emails[0].value:"",
        address : contact.addresses?contact.addresses[0].streetAddress:"",
        photo   : contact.photos?contact.photos[0].value:""
      }
    }
  }
  
  initView();

  $scope.onBack = function() {
    $ionicHistory.goBack();
  };
  $scope.test1 = function() {
    function onSuccess(contacts) {
        if(contacts.length>0) {
          alert('fined success');
          initView(contacts[0]);
          $scope.$apply();
        } else
          alert('onError!');
    };

    function onError(contactError) {
        alert('onError!');
    };
    var options      = new ContactFindOptions();
    options.filter   = $scope.contact.name;
    options.multiple = true;
    options.desiredFields = [navigator.contacts.fieldType.photos,
                             navigator.contacts.fieldType.name,
                             navigator.contacts.fieldType.phoneNumbers,
                             navigator.contacts.fieldType.emails,
                             navigator.contacts.fieldType.addresses];
    options.hasPhoneNumber = true;
    var fields       = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name];
    navigator.contacts.find(fields, onSuccess, onError, options);
  };
  $scope.test2 = function() {
    function onSuccess(contact) {
        alert("Save Success");
    };

    function onError(contactError) {
        alert("Error = " + contactError.code);
    };
    var contact = navigator.contacts.create({"displayName": $scope.contact.name});
    contact.phoneNumbers = [new ContactField('mobile', $scope.contact.tel, false)];
    contact.emails       = [new ContactField('home', $scope.contact.email, false)];
    contact.addresses    = [new ContactAddress(false, 'home', '', $scope.contact.address)];
    contact.photos       = [new ContactField('image:url', utils.imgToBase64(angular.element(defaultPhoto)[0]), false)];
    
    contact.save(onSuccess,onError);
  };
  $scope.test3 = function() {
    function onSuccess(contacts) {
        if(contacts.length>0)
          contacts[0].remove();
        alert('Delete Success');
    };

    function onError(contactError) {
        alert('onError!');
    };
    var options      = new ContactFindOptions();
    options.filter   = $scope.contact.name;
    options.multiple = true;
    options.desiredFields = [navigator.contacts.fieldType.id,,navigator.contacts.fieldType.phoneNumbers];
    options.hasPhoneNumber = true;
    var fields       = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name];
    navigator.contacts.find(fields, onSuccess, onError, options);
  };
});