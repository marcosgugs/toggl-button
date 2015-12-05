/*jslint indent: 2 */
/*global $: false, document: false, togglbutton: false*/
'use strict';

togglbutton.render('.form-title:not(.toggl)', {observe: true}, function (elem) {
  
  var link, 
      projectName = $('.row-1 td:nth-child(2)').textContent,
      description = document.querySelectorAll('tr.row-1')[3].querySelector('td:last-child').textContent;
    
  if(!description || description === "" ){
    try {
      description = document.querySelectorAll('tr.row-1')[3].querySelector('td:last-child').querySelector('input').value;
    } catch(e){
      console.log(e);
    }
  }

  console.log(projectName, description);

  link = togglbutton.createTimerLink({
    className: 'mantis',
    description: description,
    projectName: projectName
  });

  elem.appendChild(link);
});
