// Rafael JS Button

window.onload = function() {  
    var paper = new Raphael(document.getElementById('canvas_container'), 500, 500);
    /*var c = paper.rect(1,1,200,75,10);
            c.attr({
                "fill": "#c61a1a",
                "cursor": "pointer",
            });
            c.node.onmousedown = function(){
                c.attr({
                    "fill": "#f35c5c"
                });
            };
            c.node.onmouseup = function(){
                c.attr({
                    "fill": "#c61a1a"
                });
            };*/
    var t = paper.text(30,20,"Travel\nPlans");
            t.attr({
                "font-family": "'Philosopher', arial, serif",
                "font-size": "20",
                "fill": "red",
            });
            /*t.node.onmousedown = function(){
                t.attr({
                    "font-weight": "lighter",
                });
            };
            t.node.onmouseup = function(){
                t.attr({
                    "font-weight": "normal",
                });
            };*/   
}  
          

