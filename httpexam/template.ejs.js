<h1><%= name %></h1>
<p><%= description %></p>
<hr />
<% for(var i=0 ; i <10 ; i++) { %>
	<h2>The Square of <%= i %> is <%= i * i %></h2>
<% } %>