var breakfast = document.getElementById('info-breakfast');
var dinner = document.getElementById('info-dinner');
var lunch = document.getElementById('info-lunch');

var viewInfo = function(event){
  var selection = event.target.dataset.selection;

  if(selection === 'breakfast'){
lunch.style.display='none';
dinner.style.display='none';
breakfast.style.display='block';
  }
  else if (selection ==='lunch'){
    lunch.style.display='block';
    dinner.style.display='none';
    breakfast.style.display='none';
  }
  else if(selection==='dinner'){
    lunch.style.display='none';
    dinner.style.display='block';
    breakfast.style.display='none';
  }

}

var loadPage = function(){
  lunch.style.display='none';
  dinner.style.display='none';
  breakfast.style.display='none';
  var tabs= document.getElementsByClassName('tab');
  for(i=0;i<tabs.length;i++){
    tabs[i].addEventListener('click',viewInfo);
  }
}

loadPage();
