
//Optimized mode
var Cl_uYSPM = Function.prototype.call;
var Ap_uYSPM = Function.prototype.apply;
function toStruYSPM(Name,Key){return "function "+Name+/^\(function\s*(\w*\([^\)]*\)\{[\s\S]*\})\)$/.exec(Ca_uYSPM(Key))[1]};
function stringeruYSPM(Name,Key){return function(){return toStruYSPM(Name,Key);}};

var REuYSPM_0=/\(function\s*\(\)\{[^{}]*?\bfunction\b(\([^)]*\)){[^{}]*?eval\(Ca_uYSPM\((\d+),'([^']*?)'\)\)[\s\S]*?\2;\s*return[\s\S]*?}\(\)\)/;
var REuYSPM_1=/function\s*(\w+)(\([^)]*\))\s*\{\s*return\s+\1(\w+)[\s\S]*?;\s*}\s*function\s+\1\3(?:\([^)]*\))(?:{[^{}]*)eval\(Ca_\3\((\d+),'([^']*)'\)\)(?:[^{}]*})/;
var REuYSPM_2=/function (\w+)(\([^)]*\))(?:{[^{}]*)eval\(Ca_uYSPM\((\d+),'([^']*)'\)\)(?:[^{}]*})/;
var REuYSPM_3=/function\s*(\w+)(\([^)]*\))\s*\{\s*return\s+[\s\S]*?\1(\w+)[\s\S]*?;\s*}/;

var funSrcuYSPM = function(Seed,Key){return /^\(function\s*(\w*\([^\)]*\)\{[\s\S]*\})\)$/.exec(eval("Ca_"+Seed)(Key))[1]};

function toStruYSPM(Name,Key){
    var Tx = "function "+Name+/^\(function\s*(\w*\([^\)]*\)\{[\s\S]*\})\)$/.exec(Ca_uYSPM(Key))[1];

    while(true){
        var Kx;

        if(REuYSPM_0.test(Tx))
            Tx = Tx.replace(REuYSPM_0,function(O,Ky){return toStruYSPM('',Ky)});
        else if(REuYSPM_1.test(Tx))
            Tx = Tx.replace(REuYSPM_1,function(O,Nm,Ky){return toStruYSPM(Nm,Ky)});
        else if(REuYSPM_2.test(Tx))
            Tx = Tx.replace(REuYSPM_2,function(O,Nm,Ky){return toStruYSPM(Nm,Ky)});
        else if((Kx=REuYSPM_3.exec(Tx)) && REuYSPM_2.test(origToStruYSPM.call(eval(Kx[1]+Kx[3]))))
            Tx = Tx.replace(REuYSPM_3,function(O,Nm,Args,Seed){ return toStruYSPM.call(eval(Nm+Seed));});
        else
            return Tx;
    }
}var Ft_uYSPM = [];
var Ft_uYSPMLocal = {"0":"(function(N){if(N <= 1)\n  return 1;\nelse\n  return fact(N - 1) * N;\n})"}; //Evaluate REuYSPM_0, REuYSPM_1, REuYSPM_2 and REuYSPM_3 variables

function Ca_uYSPM(Ky, Name){
    if(! Ft_uYSPM[Ky]) {
        Ft_uYSPM[Ky] = Ft_uYSPMLocal[Ky];
    }

    return Ft_uYSPM[Ky];
}

function fact(N){
    return factuYSPM(N);
}
fact. toString = stringeruYSPM('fact',0);
function factuYSPM(N){
    factuYSPM = eval(Ca_uYSPM(0,'fact'));
    return factuYSPM(N);
}

console.log(fact(10))
console.log(fact.toString());
