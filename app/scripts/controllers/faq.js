'use strict';


angular.module('wecookApp')
  .controller('FaqCtrl', function($scope) {

    $scope.questions = [{
      question: 'Vad är Tejst?',
      answer: 'Tejst är en community för dom som älskar mat, vissa äter andra lagar'
    }, {
      question: 'Vilka lagar maten?',
      answer: 'Maten lagas av dina grannar i deras hem och på deras vis'
    }, {
      question: 'Kan jag få hemkörning?',
      answer: 'Ja hemkörning går att beställa mot en kostnad av 25 kr'
    }, {
      question: 'Hur långt innan måste jag beställa maten?',
      answer: 'Hur lång tid det tar att tillaga maten beror på vilken rätt och kock du beställer av, men ofta ett dygn innan'
    }, {
      question: 'När kan jag hämta maten?',
      answer: 'Du kommer får ett mail eller sms när maten är färdig för avhämtning'
    },{
      question: 'Vem sätter priset på rätterna?',
      answer: 'Priset för respektive rätt sätts av kocken'
    },{
      question: 'Hur tjänar Tejst pengar?',
      answer: 'Tejst tar en avgift på varje beställning på 20 procent av slutpriset'
    },{
      question: 'Vilka tjänster tillhandahåller Tejst',
      answer: 'Tejst sköter alla beställningar och betalningar så våra medlemmar kan fokusera på att njuta av god mat. En proffesionell fotograf kommer också hem till varje kock för att fotografera rätterna, vi vill att dom ska se lika bra ut som dom smakar!'
    }];

  });
