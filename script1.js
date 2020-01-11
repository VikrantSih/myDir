
$(document).ready(function(){
url = "https://randomuser.me/api/?inc=picture,name,gender,dob,location,email";
var p ="";	
var loadMore;
});

loadMore = '<button id="loadmore" class="btn btn-primary">Add User</button>';
	$("#result").append(loadMore);
	$('#loadmore').on('click', function() {
            fetchInformation(url);
            $(this).remove();
          });

function fetchInformation(url){
        fetch(url)
        .then((response) => response.json())
        .then(function(data){

           data.results.forEach(person => {
		p = `<div class="well">
               <img src="${person.picture.medium}" class="img-rounded" alt="Cinque Terre">
               <span style="margin-left:25px;">${person.name.title}  ${person.name.first} ${person.name.last}</span>
		<span style="margin-left:25px;">Gender: ${person.gender}</span>
		<span style="margin-left:25px;">Age:${person.dob.age}</span>		
		<span style="margin-left:60px;">Address: ${person.location.street.number} ${person.location.street.name} ${person.location.city} ${person.location.state}
		${person.location.postcode}</span>
               <span style="margin-left:350px;">Email: ${person.email}</span>
               </div>`;
               console.log(p);
               $("#result").append(p);
               }); 

          loadMore = '<button id="loadmore" class="btn btn-primary">Add user</button>';
		$("#result").append(loadMore);
		$('#loadmore').on('click', function() {
		fetchInformation(url);
		$(this).remove();
          });        
           
        })
    }

