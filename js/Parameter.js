function getParameter(sArgName)
{
	var sHref = window.location.href;
  var args  = sHref.split("?");
  var retval = "";
  
  if (args[0] == sHref)
     return retval;
  
  var str = args[1];
  args = str.split("&");
  for(var i = 0; i < args.length; i ++){
    str = args[i];
    var arg = str.split("=");
    if(arg.length <= 1) continue;
    if(arg[0] == sArgName) retval = arg[1]; 
  }
  return retval;

	
	/*
  var url = window.location.href;
  var qparts = url.split("?");
  if (qparts.length == 0){return "";}
  var query = qparts[1];
  var vars = query.split("&amp;");
  var value = "";
  for (i=0; i<vars.length; i++)
  {
    var parts = vars[i].split("=");
    if (parts[0] == varname)
    {
      value = parts[1];
      break;
    }
  }
  value = unescape(value);
  value.replace(/\+/g," ");
  return value;
  */
}