var homepage = "https://www.excuzily.xyz";
function random_posts(t){for(var e=0;e<borp_number;e++){var r=t.feed.entry[e],s=r.title.$t;if("content"in r)i=r.content.$t;else if("summary"in r)i=r.summary.$t;else var i="";if((i=i.replace(/<[^>]*>/g,"")).length<borp_chars)var a=i;else{var n=(i=i.substring(0,borp_chars)).lastIndexOf(" ");a=i.substring(0,n)+"&#133;"}for(var o=0;o<r.link.length;o++){if("thr$total"in r)var l=r.thr$total.$t+" "+borp_comments;else l=borp_commentsd;if("alternate"==r.link[o].rel){var m=r.link[o].href,c=r.published.$t;if("media$thumbnail"in r)var u=r.media$thumbnail.url;else u="https://4.bp.blogspot.com/-atF9AaH_YEI/WXc5HKoFZmI/AAAAAAAAAGE/LoIPxdwBHecNVesXy9J0AQJwdIuWFYu0QCLcBGAs/s1600/no_thumb.png"}}document.write("<li>"),document.write('<img alt="'+s+'" src="'+u+'"/>'),document.write('<div><a href="'+m+'" rel="nofollow">'+s+"</a></div>"),"yes"==borp_details&&document.write("<span>"+c.substring(8,10)+"."+c.substring(5,7)+"."+c.substring(0,4)+" - "+l),"yes"==borp_details2&&document.write('<span class="random-summary">'+a),document.write('<div style="clear:both"></div></li>')}}getvalue();for(var i=0;i<borp_number;i++)document.write('<script type="text/javascript" src="'+homepage+'/feeds/posts/default?alt=json-in-script&start-index='+borp_current[i]+'&max-results=1&callback=random_posts"><\/script>');
