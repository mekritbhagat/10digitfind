var ch = '^[0-1][0-2]|/[1-9]{10}$/g';
    var matches = dataString.match(ck);
    var reg1 = new RegExp("^([0]{3}?[[1-9]{7}$/");
    var reg = new RegExp('^[0-1][0-2]|/[1-9]{10}$/g');
    for (var i = 0; i < matches.length; i++) {
        var r = '/\d{10}$/g';
        var rg = /\d+0\d+0\d/g;
        /*if((matches <= 9 || matches >= 11) || matches == rg ){
            res.send(matches + ": Matched");
        }*/
        
        //var ts = reg.test(matches);
        res.send( matches + ": is Matched" );
    }

    /*function findPoli(){
        var s = vari.value();
        var r = /\d+0\d+0\d/g;
        chek(r.test(s));
    }*/

    //var matches = dataString.match(r);
    // for ((matches >= 9) && (matches <= 10))
    // {

    // }
    /*var str = "Some of the best numbers are 42, and, in particular 42.999. 1234567890";
    var number_regex = /[+-]?\d+(\d+)?/g;

    var matches = [];

    var match;
    while ((match = number_regex.exec(str)) !== null) {
        matches.push(match[0]);
        if (match == r) {
            for (var i = 0; i < match.length; i++) {
                res.send(match + ": is finally matched");
            }
        }
    }*/

    //console.log(matches);
    //var num = dataString.match(/\d/g);

    /*var r = /\d{4}/;
    r.test('1234');
    res.send(r);*/
