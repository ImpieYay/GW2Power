var isLoading = false;
var isCheckingBuffs = false;
var buffOpen = true;
var advancedOpen = false;

//stats of party buffs, and the state for each build (1=enabled,0=disabled)
var party_SiN = [150, 0, 0, 0, 0, 0],
    party_Empower = [150, 0, 0, 0, 0, 0],
    party_banDis = [170, 0, 0, 0, 0, 0],
    party_banStr = [170, 0, 0, 0, 0, 0],
    party_banTac = [170, 0, 0, 0, 0, 0],
    party_banDef = [170, 0, 0, 0, 0, 0],

    party_Assassin = [150, 0, 0, 0, 0, 0],
    party_Rite = [1, 0, 0, 0, 0, 0],

    party_Spotter = [150, 0, 0, 0, 0, 0],

    party_On = 1,
    buffArray = [party_SiN, party_Empower, party_banDis, party_banStr, party_banTac, party_banDef, party_Assassin, party_Rite, party_Spotter],
    buffArrayStrings = ["SN", "EM", "BD", "BS", "BT", "BF", "AS", "RT", "SP"], //use these strings as markup for the buffArray - short so URL doesnt get longer than necessary
    buffString = "";

var professions = ["Guardian", "Warrior", "Revenant", "Engineer", "Ranger", "Thief", "Mesmer", "Elementalist", "Necromancer"];

function partyOn(state) {
    party_On = state;
    var result;

    for (var i = 0; i < 9; i++) {
        if ($('#collapse' + professions[i]).hasClass('in')) {
            result = professions[i].toLowerCase();
            break;
        }
    }
    
    isLoading = true;
    for (i = 1; i < 6; i++) {
        if (document.getElementById(result + '_power_' + i).value > 0 || document.getElementById(result + '_toughness_' + i).value > 0) calculate(result, i);   //only calculate when build is there, so empty cells stay that way
        else if (document.getElementById(result + '_ilink_' + i).value == "") clearBuild(result, i, 'n');
        //doesn't delete the build if it has a link, so it wont get lost
    }
    isLoading = false;
    highlightHighest(result);
}

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

$('#collapseNecromancer').on('show.bs.collapse', function () {
    $('#collapseElementalist').collapse('hide');
    $('#collapseMesmer').collapse('hide');
    $('#collapseThief').collapse('hide');
    $('#collapseEngineer').collapse('hide');
    $('#collapseRanger').collapse('hide');
    $('#collapseWarrior').collapse('hide');
    $('#collapseGuardian').collapse('hide');
    $('#collapseRevenant').collapse('hide');
    $('#collapseMain').collapse('hide');
    $('#collapseCondi').collapse('hide');
    $('#collapseHelp').collapse('hide');
    $('#collapseAbout').collapse('hide');
    activeBox('necromancer');
    DeleteHighlightExcept('necromancer');
    showBuffpanel('y');
})
$('#collapseNecromancer').on('hidden.bs.collapse', function () {
    if($('#necromancer').hasClass('necromancer_A')){
        $('#necromancer').removeClass('necromancer_A');
        $('#necromancer').addClass('necromancer_U');
    }
})




$('#collapseElementalist').on('show.bs.collapse', function () {
    $('#collapseNecromancer').collapse('hide');
    $('#collapseMesmer').collapse('hide');
    $('#collapseThief').collapse('hide');
    $('#collapseEngineer').collapse('hide');
    $('#collapseRanger').collapse('hide');
    $('#collapseWarrior').collapse('hide');
    $('#collapseGuardian').collapse('hide');
    $('#collapseRevenant').collapse('hide');
    $('#collapseMain').collapse('hide');
    $('#collapseCondi').collapse('hide');
    $('#collapseHelp').collapse('hide');
    $('#collapseAbout').collapse('hide');
    activeBox('elementalist');
    DeleteHighlightExcept('elementalist');
    showBuffpanel('y');
})
$('#collapseElementalist').on('hidden.bs.collapse', function () {
    if ($('#elementalist').hasClass('elementalist_A')) {
        $('#elementalist').removeClass('elementalist_A');
        $('#elementalist').addClass('elementalist_U');
    }
})



$('#collapseMesmer').on('show.bs.collapse', function () {
    $('#collapseElementalist').collapse('hide');
    $('#collapseNecromancer').collapse('hide');
    $('#collapseThief').collapse('hide');
    $('#collapseEngineer').collapse('hide');
    $('#collapseRanger').collapse('hide');
    $('#collapseWarrior').collapse('hide');
    $('#collapseGuardian').collapse('hide');
    $('#collapseRevenant').collapse('hide');
    $('#collapseMain').collapse('hide');
    $('#collapseCondi').collapse('hide');
    $('#collapseHelp').collapse('hide');
    $('#collapseAbout').collapse('hide');
    activeBox('mesmer');
    DeleteHighlightExcept('mesmer');
    showBuffpanel('y');
})
$('#collapseMesmer').on('hidden.bs.collapse', function () {
    if($('#mesmer').hasClass('mesmer_A')){
        $('#mesmer').removeClass('mesmer_A');
        $('#mesmer').addClass('mesmer_U');
    }
})


$('#collapseThief').on('show.bs.collapse', function () {
    $('#collapseElementalist').collapse('hide');
    $('#collapseNecromancer').collapse('hide');
    $('#collapseMesmer').collapse('hide');
    $('#collapseEngineer').collapse('hide');
    $('#collapseRanger').collapse('hide');
    $('#collapseWarrior').collapse('hide');
    $('#collapseGuardian').collapse('hide');
    $('#collapseRevenant').collapse('hide');
    $('#collapseMain').collapse('hide');
    $('#collapseCondi').collapse('hide');
    $('#collapseHelp').collapse('hide');
    $('#collapseAbout').collapse('hide');
    activeBox('thief');
    DeleteHighlightExcept('thief');
    showBuffpanel('y');
})
$('#collapseThief').on('hidden.bs.collapse', function () {
    if ($('#thief').hasClass('thief_A')) {
        $('#thief').removeClass('thief_A');
        $('#thief').addClass('thief_U');
    }
})



$('#collapseEngineer').on('show.bs.collapse', function () {
    $('#collapseElementalist').collapse('hide');
    $('#collapseNecromancer').collapse('hide');
    $('#collapseMesmer').collapse('hide');
    $('#collapseThief').collapse('hide');
    $('#collapseRanger').collapse('hide');
    $('#collapseWarrior').collapse('hide');
    $('#collapseGuardian').collapse('hide');
    $('#collapseRevenant').collapse('hide');
    $('#collapseMain').collapse('hide');
    $('#collapseCondi').collapse('hide');
    $('#collapseHelp').collapse('hide');
    $('#collapseAbout').collapse('hide');
    activeBox('engineer');
    DeleteHighlightExcept('engineer');
    showBuffpanel('y');
})
$('#collapseEngineer').on('hidden.bs.collapse', function () {
    if ($('#engineer').hasClass('engineer_A')) {
        $('#engineer').removeClass('engineer_A');
        $('#engineer').addClass('engineer_U');
    }
})



$('#collapseRanger').on('show.bs.collapse', function () {
    $('#collapseElementalist').collapse('hide');
    $('#collapseNecromancer').collapse('hide');
    $('#collapseMesmer').collapse('hide');
    $('#collapseThief').collapse('hide');
    $('#collapseEngineer').collapse('hide');
    $('#collapseWarrior').collapse('hide');
    $('#collapseGuardian').collapse('hide');
    $('#collapseRevenant').collapse('hide');
    $('#collapseMain').collapse('hide');
    $('#collapseCondi').collapse('hide');
    $('#collapseHelp').collapse('hide');
    $('#collapseAbout').collapse('hide');
    activeBox('ranger');
    DeleteHighlightExcept('ranger');
    showBuffpanel('y');
})
$('#collapseRanger').on('hidden.bs.collapse', function () {
    if ($('#ranger').hasClass('ranger_A')) {
        $('#ranger').removeClass('ranger_A');
        $('#ranger').addClass('ranger_U');
    }
})



$('#collapseWarrior').on('show.bs.collapse', function () {
    $('#collapseElementalist').collapse('hide');
    $('#collapseNecromancer').collapse('hide');
    $('#collapseMesmer').collapse('hide');
    $('#collapseThief').collapse('hide');
    $('#collapseEngineer').collapse('hide');
    $('#collapseRanger').collapse('hide');
    $('#collapseGuardian').collapse('hide');
    $('#collapseRevenant').collapse('hide');
    $('#collapseMain').collapse('hide');
    $('#collapseCondi').collapse('hide');
    $('#collapseHelp').collapse('hide');
    $('#collapseAbout').collapse('hide');
    activeBox('warrior');
    DeleteHighlightExcept('warrior');
    showBuffpanel('y');
})
$('#collapseWarrior').on('hidden.bs.collapse', function () {
    if ($('#warrior').hasClass('warrior_A')) {
        $('#warrior').removeClass('warrior_A');
        $('#warrior').addClass('warrior_U');
    }
})



$('#collapseGuardian').on('show.bs.collapse', function () {
    $('#collapseElementalist').collapse('hide');
    $('#collapseNecromancer').collapse('hide');
    $('#collapseMesmer').collapse('hide');
    $('#collapseThief').collapse('hide');
    $('#collapseEngineer').collapse('hide');
    $('#collapseRanger').collapse('hide');
    $('#collapseWarrior').collapse('hide');
    $('#collapseRevenant').collapse('hide');
    $('#collapseMain').collapse('hide');
    $('#collapseCondi').collapse('hide');
    $('#collapseHelp').collapse('hide');
    $('#collapseAbout').collapse('hide');
    activeBox('guardian');
    DeleteHighlightExcept('guardian');
    showBuffpanel('y');
})
$('#collapseGuardian').on('hidden.bs.collapse', function () {
    if ($('#guardian').hasClass('guardian_A')) {
        $('#guardian').removeClass('guardian_A');
        $('#guardian').addClass('guardian_U');
    }
})



$('#collapseRevenant').on('show.bs.collapse', function () {
    $('#collapseElementalist').collapse('hide');
    $('#collapseNecromancer').collapse('hide');
    $('#collapseMesmer').collapse('hide');
    $('#collapseThief').collapse('hide');
    $('#collapseEngineer').collapse('hide');
    $('#collapseRanger').collapse('hide');
    $('#collapseWarrior').collapse('hide');
    $('#collapseGuardian').collapse('hide');
    $('#collapseMain').collapse('hide');
    $('#collapseCondi').collapse('hide');
    $('#collapseHelp').collapse('hide');
    $('#collapseAbout').collapse('hide');
    activeBox('revenant');
    DeleteHighlightExcept('revenant');
    showBuffpanel('y');
})
$('#collapseRevenant').on('hidden.bs.collapse', function () {
    if ($('#revenant').hasClass('revenant_A')) {
        $('#revenant').removeClass('revenant_A');
        $('#revenant').addClass('revenant_U');
    }
})





$('#collapseMain').on('shown.bs.collapse', function () {
    $('#collapseElementalist').collapse('hide');
    $('#collapseNecromancer').collapse('hide');
    $('#collapseMesmer').collapse('hide');
    $('#collapseThief').collapse('hide');
    $('#collapseEngineer').collapse('hide');
    $('#collapseRanger').collapse('hide');
    $('#collapseWarrior').collapse('hide');
    $('#collapseGuardian').collapse('hide');
    $('#collapseRevenant').collapse('hide');
    $('#collapseCondi').collapse('hide');
    $('#collapseHelp').collapse('hide');
    $('#collapseAbout').collapse('hide');
    showBuffpanel('n');
})
$('#collapseMain').on('show.bs.collapse', function () {
    MakeActive('home');
    DeleteHighlightExcept(0);
})
$('#collapseMain').on('hide.bs.collapse', function () {
    MakeInactive('home');
})

$('#collapseCondi').on('shown.bs.collapse', function () {
    $('#collapseElementalist').collapse('hide');
    $('#collapseNecromancer').collapse('hide');
    $('#collapseMesmer').collapse('hide');
    $('#collapseThief').collapse('hide');
    $('#collapseEngineer').collapse('hide');
    $('#collapseRanger').collapse('hide');
    $('#collapseWarrior').collapse('hide');
    $('#collapseGuardian').collapse('hide');
    $('#collapseRevenant').collapse('hide');
    $('#collapseMain').collapse('hide');
    $('#collapseHelp').collapse('hide');
    $('#collapseAbout').collapse('hide');
    showBuffpanel('n');
})
$('#collapseCondi').on('show.bs.collapse', function () {
    MakeActive('condi');
    DeleteHighlightExcept(0);
    condicalc();
})
$('#collapseCondi').on('hide.bs.collapse', function () {
    MakeInactive('condi');
})

$('#collapseHelp').on('shown.bs.collapse', function () {
    $('#collapseElementalist').collapse('hide');
    $('#collapseNecromancer').collapse('hide');
    $('#collapseMesmer').collapse('hide');
    $('#collapseThief').collapse('hide');
    $('#collapseEngineer').collapse('hide');
    $('#collapseRanger').collapse('hide');
    $('#collapseWarrior').collapse('hide');
    $('#collapseGuardian').collapse('hide');
    $('#collapseRevenant').collapse('hide');
    $('#collapseMain').collapse('hide');
    $('#collapseCondi').collapse('hide');
    $('#collapseAbout').collapse('hide');
    showBuffpanel('n');
})
$('#collapseHelp').on('show.bs.collapse', function () {
    MakeActive('help');
    DeleteHighlightExcept(0);
})
$('#collapseHelp').on('hide.bs.collapse', function () {
    MakeInactive('help');
})

$('#collapseAbout').on('shown.bs.collapse', function () {
    $('#collapseElementalist').collapse('hide');
    $('#collapseNecromancer').collapse('hide');
    $('#collapseMesmer').collapse('hide');
    $('#collapseThief').collapse('hide');
    $('#collapseEngineer').collapse('hide');
    $('#collapseRanger').collapse('hide');
    $('#collapseWarrior').collapse('hide');
    $('#collapseGuardian').collapse('hide');
    $('#collapseRevenant').collapse('hide');
    $('#collapseMain').collapse('hide');
    $('#collapseHelp').collapse('hide');
    $('#collapseCondi').collapse('hide');
    showBuffpanel('n');
})
$('#collapseAbout').on('show.bs.collapse', function () {
    MakeActive('about');
    DeleteHighlightExcept(0);
})
$('#collapseAbout').on('hide.bs.collapse', function () {
    MakeInactive('about');
})

//functions for above functions
function showBuffpanel(show) {
    $('#BuffBtnBar').collapse('show');
    if (show == 'y') {
        if (buffOpen) {
            $('#collapseBuffs').collapse('show');
            $('#collapseAdvanced').collapse('hide');
        }
        if (advancedOpen) {
            $('#collapseAdvanced').collapse('show');
            setTimeout(partyOn,250,party_On); //makes sure the DeltaStat values are calculated again - delay so JQuery can set the profession first
        }
        updateBuffBtn();
        updateAdvancedBtn();
    }
    else {
        $('#collapseBuffs').collapse('hide');
        $('#collapseAdvanced').collapse('hide');
        $('#BuffBtnBar').collapse('hide');
    }
}

function collapsePage(id) {
    $('#'+ id).collapse('hide');
}

function collapseDropdown() {
    $('#dropdown_prof').removeClass('open');
}


function collapseSaveLoad(profession, thisbtn) {
    if (thisbtn == save) {
        $('#' + profession + '_loadbtn').removeClass('open');
    }
    if (thisbtn == load) {
        $('#' + profession + '_savebtn').removeClass('open');
    }
}

function makeActive(profession) {
    $('#collapse' + profession).collapse('show');
}

//changes appearance of Buff Button
$('#BuffBtn').on('click', function () {
    if ($('#collapseBuffs').hasClass('in')) {
        $('#BuffBtn').removeClass('btn-danger');
        $('#BuffBtn').addClass('btn-primary');
        $('#BuffBtn').text('Open Buff Panel');
        buffOpen = false;
    }
    else {
        $('#BuffBtn').removeClass('btn-primary');
        $('#BuffBtn').addClass('btn-danger');
        $('#BuffBtn').text('Close Buff Panel');
        buffOpen = true;
    }
})

$('#AdvancedBtn').on('click', function () {
    if ($('#collapseAdvanced').hasClass('in')) {
        $('#AdvancedBtn').removeClass('btn-danger');
        $('#AdvancedBtn').addClass('btn-primary');
        $('#AdvancedBtn').text('Open Advanced');
        advancedOpen = false;
    }
    else {
        $('#AdvancedBtn').removeClass('btn-primary');
        $('#AdvancedBtn').addClass('btn-danger');
        $('#AdvancedBtn').text('Close Advanced');
        advancedOpen = true;
    }
})

//makes sure button stays updated when getting hidden by other panels (main,condi,help,about)
function updateBuffBtn() {
    if ($('#collapseBuffs').hasClass('in')) {
        $('#BuffBtn').removeClass('btn-primary');
        $('#BuffBtn').addClass('btn-danger');
        $('#BuffBtn').text('Close Buff Panel');
    }
    else {
        $('#BuffBtn').removeClass('btn-danger');
        $('#BuffBtn').addClass('btn-primary');
        $('#BuffBtn').text('Open Buff Panel');
    }
}
function updateAdvancedBtn() {
    if ($('#collapseAdvanced').hasClass('in')) {
        $('#AdvancedBtn').removeClass('btn-primary');
        $('#AdvancedBtn').addClass('btn-danger');
        $('#AdvancedBtn').text('Close Advanced');
    }
    else {
        $('#AdvancedBtn').removeClass('btn-danger');
        $('#AdvancedBtn').addClass('btn-primary');
        $('#AdvancedBtn').text('Open Advanced');
    }
}

//for navigation pages
function MakeActive(page) {
    document.getElementById(page).className = "active";
}

function MakeInactive(page) {
    document.getElementById(page).className = "";
}


function DeleteHighlightExcept(profession) {
    //delete everything except the profession
    for (i = 0; i < 9; i++) {
        //document.getElementById(professions[i]).src = "img/" + professions[i] + "_U.png";
        $('#' + professions[i]).removeClass(professions[i] + '_A');
        $('#' + professions[i]).addClass(professions[i] + '_U');
    }
    if (profession != 0) {
        //document.getElementById(profession).src = "img/" + profession + "_A.png";
       $('#' + profession).removeClass(profession + '_U');
       $('#' + profession).addClass(profession + '_A');
    }
}

function ResetRadio(profession, buildnr, thisbtn, otherbtn) {
    document.getElementById(profession + "_" + otherbtn + "_" + buildnr).checked = false;
    document.getElementById(profession + "_" + thisbtn + "_" + buildnr).checked = true;
    calculate(profession, buildnr);
}
function ResetRadioPurge(profession, buildnr, thisbtn, otherbtn) {
    document.getElementById(profession + "_" + otherbtn + "_" + buildnr).checked = false;
    document.getElementById(profession + "_" + thisbtn + "_" + buildnr).checked = true;
    condicalc();
}


//table functions
function calculate(profession, buildnr) {
    //getting variables
    var power = Number(document.getElementById(profession + "_power_" + buildnr).value);
    var precision = Number(document.getElementById(profession + "_precision_" + buildnr).value);
    var ferocity = Number(document.getElementById(profession + "_ferocity_" + buildnr).value);

    var toughness = Number(document.getElementById(profession + "_toughness_" + buildnr).value);
    var vitality = Number(document.getElementById(profession + "_vitality_" + buildnr).value);
    var healingpower = Number(document.getElementById(profession + "_healing_" + buildnr).value); 
    
    var multiplier = document.getElementById(profession + "_multiplier_" + buildnr).value;
    multiplier = multiplier.replace(/,/g, '.'); // replace commas
    multiplier = multiplier.replace(/\s/g, ''); // remove spaces
    multiplier = multiplier.replace(/\+/g, '*'); // remove spaces

    if (multiplier.indexOf('*') > -1 ) {
        //calculations are possible
        var reader = 0;
        var length = multiplier.length;
        var numbers = [];

        while (reader < length + 1) {
            var step = multiplier.indexOf("*", reader);
            if (step > -1) {
                numbers.push(multiplier.slice(reader, step));
                reader = step + 1;
            }
            else {
                //take last characters.
                numbers.push(multiplier.slice(reader, length + 1));
                //calculate array
                ArrayLength = numbers.length;
                var answer = 1;
                for (i = 0; i < ArrayLength; i++) {
                    answer = Number(answer * numbers[i]);
                }
                multiplier = answer;
                document.getElementById(profession + "_multiplier_" + buildnr).value = multiplier.toFixed(3);
                break;
            }
        }
    }
    else { multiplier = Number(multiplier) };

    var critbonus = Number(document.getElementById(profession + "_critbonus_" + buildnr).value);
    var might = Number(document.getElementById(profession + "_might_" + buildnr).value);
    var fury = Number(document.getElementById(profession + "_fury_" + buildnr).value / 100);

    var vuln = Number(document.getElementById(profession + "_vulnerability_" + buildnr).value);
    var bloodlust = Number(document.getElementById(profession + "_bloodlust_" + buildnr).value);


    var basearmor_L = 967;
    var basearmor_M = 1118;
    var basearmor_H = 1271;
   
    
    if (document.getElementById(profession + "_gearexo_" + buildnr).checked) {
        var basearmor_L = 920;
        var basearmor_M = 1064;
        var basearmor_H = 1211;
    }
    else {
        var basearmor_L = 967;
        var basearmor_M = 1118;
        var basearmor_H = 1271;
    }
  

   
   if (document.getElementById(profession + "_weapexo_" + buildnr).checked) {
       multiplier = multiplier / 1.05;
   }
   

//calculation
    //health and armor
    switch (profession) {
        case 'guardian':
            var unb_health = 1645 + (10 * vitality);
            var armor = (basearmor_H + toughness);
            break;
        case 'warrior':
            var unb_health = 9212 + (10 * vitality);
            var armor = basearmor_H + toughness;
            break;
        case 'revenant':
            var unb_health = 5922 + (10 * vitality);
            var armor = basearmor_H + toughness;
            break;
        case 'engineer':
            var unb_health = 5922 + (10 * vitality);
            var armor = basearmor_M + toughness;
            break;
        case 'ranger':
            var unb_health = 5922 + (10 * vitality);
            var armor = basearmor_M + toughness;
            break;
        case 'thief':
            var unb_health = 1645 + (10 * vitality);
            var armor = basearmor_M + toughness;
            break;
        case 'mesmer':
            var unb_health = 5922 + (10 * vitality);
            var armor = basearmor_L + toughness;
            break;
        case 'elementalist':
            var unb_health = 1645 + (10 * vitality);
            var armor = basearmor_L + toughness;
            break;
        case 'necromancer':
            var unb_health = 9212 + (10 * vitality);
            var armor = basearmor_L + toughness;
            break;
        default: //backup to prevent errors
            var unb_health = 5922 + (10 * vitality);
            var armor = basearmor_M + toughness;
            break;
   }

    //###### PARTY BUFFS ##########//
    var buf_armor = armor + party_On * (party_SiN[0] * party_SiN[buildnr] + party_banDef[0] * party_banDef[buildnr]);
    var buf_health = unb_health + party_On * (party_banDef[0] * party_banDef[buildnr]);

    var buf_power = power + party_On * (party_Empower[0] * party_Empower[buildnr] + party_banStr[0] * party_banStr[buildnr]);
    var buf_precision = precision + party_On * (party_Spotter[0] * party_Spotter[buildnr] + party_banDis[0] * party_banDis[buildnr]);
    var buf_ferocity = ferocity + party_On * (party_Assassin[0] * party_Assassin[buildnr] + party_banDis[0] * party_banDis[buildnr]);

    var buf_rite = party_On * (party_Rite[0] * party_Rite[buildnr]);

    //crit chance
    var critchance = (calc_critchance(precision));
    var critchance_f = (calc_critchance(precision + 20 * 21));
    var buf_critchance = (calc_critchance(buf_precision + critbonus * 21));
    var buf_critchance_f = (calc_critchance(buf_precision + (20 + critbonus) * 21));

    var critchance_delta = (calc_critchance(precision + 1));
    var critchance_deltaf = (calc_critchance(precision + 1 + 20 * 21));
    var buf_critchance_delta = (calc_critchance(buf_precision + 1 + critbonus * 21));
    var buf_critchance_deltaf = (calc_critchance(buf_precision + 1 + (20 + critbonus) * 21));

    //Effective Power
    var EP_buffed = (1 + vuln / 100) * (fury * (multiplier * (buf_power + might * 30 + bloodlust * 10) * (1 + (buf_critchance_f / 100) * (0.5 + buf_ferocity / 1500))) + (1 - fury) * (multiplier * (buf_power + might * 30 + bloodlust * 10) * (1 + (buf_critchance / 100) * (0.5 + buf_ferocity / 1500))));
    document.getElementById('adv_bupow_' + buildnr).innerHTML = (((1 + vuln / 100) * (fury * (multiplier * (buf_power + 1 + might * 30 + bloodlust * 10) * (1 + (buf_critchance_f / 100) * (0.5 + buf_ferocity / 1500))) + (1 - fury) * (multiplier * (buf_power +1 + might * 30 + bloodlust * 10) * (1 + (buf_critchance / 100) * (0.5 + buf_ferocity / 1500))))) - EP_buffed).toFixed(2);
    document.getElementById('adv_bupre_' + buildnr).innerHTML = (((1 + vuln / 100) * (fury * (multiplier * (buf_power + might * 30 + bloodlust * 10) * (1 + (buf_critchance_deltaf / 100) * (0.5 + buf_ferocity / 1500))) + (1 - fury) * (multiplier * (buf_power + might * 30 + bloodlust * 10) * (1 + (buf_critchance_delta / 100) * (0.5 + buf_ferocity / 1500))))) - EP_buffed).toFixed(2);
    document.getElementById('adv_bufer_' + buildnr).innerHTML = (((1 + vuln / 100) * (fury * (multiplier * (buf_power + might * 30 + bloodlust * 10) * (1 + (buf_critchance_f / 100) * (0.5 + (buf_ferocity + 1) / 1500))) + (1 - fury) * (multiplier * (buf_power + might * 30 + bloodlust * 10) * (1 + (buf_critchance / 100) * (0.5 + (buf_ferocity + 1) / 1500))))) - EP_buffed).toFixed(2);

    var EP_unbuffed = (power * (1 + critchance / 100 * (ferocity / 1500 + 0.5))) * (1 + vuln / 100);
    document.getElementById('adv_unpow_' + buildnr).innerHTML = (((power+1) * (1 + critchance / 100 * (ferocity / 1500 + 0.5))) * (1 + vuln / 100) - EP_unbuffed).toFixed(2);
    document.getElementById('adv_unpre_' + buildnr).innerHTML = ((power * (1 + critchance_delta / 100 * (ferocity / 1500 + 0.5))) * (1 + vuln / 100) - EP_unbuffed).toFixed(2);
    document.getElementById('adv_unfer_' + buildnr).innerHTML = ((power * (1 + critchance / 100 * ((ferocity+1) / 1500 + 0.5))) * (1 + vuln / 100) - EP_unbuffed).toFixed(2);
    
    if (profession == "necromancer") {
        var newcritchance = calc_critchance(buf_precision + (50 + critbonus) * 21);
        var newcritchance_f = calc_critchance(buf_precision + (70 + critbonus) * 21);

        var EP_death = (1 + vuln / 100) * (fury * (multiplier * (buf_power + might * 30 + bloodlust * 10) * (1 + (newcritchance_f / 100) * (0.5 + buf_ferocity / 1500))) + (1 - fury) * (multiplier * (buf_power + might * 30 + bloodlust * 10) * (1 + (newcritchance / 100) * (0.5 + buf_ferocity / 1500))));
        document.getElementById(profession + "_EP_death_" + buildnr).innerHTML = EP_death.toFixed(0);
    }
    

    //Effective Health
    var EHP_delta = document.getElementById('adv_healing_' + buildnr).value;

    var EHP_buffed = ((buf_armor * (1+buf_rite)) * buf_health / 1846);
    document.getElementById('adv_buehp_' + buildnr).innerHTML = numeral((buf_armor * (EHP_delta * (1+buf_rite)) / 1846) + EHP_buffed).format('0,0');

    var EHP_unbuffed = (armor * unb_health / 1846);
    document.getElementById('adv_unehp_' + buildnr).innerHTML = numeral((armor * EHP_delta / 1846) + EHP_unbuffed).format('0,0');

    //output to table
    document.getElementById(profession + "_critchance_" + buildnr).innerHTML = buf_critchance.toFixed(1) + " %";

    document.getElementById(profession + "_EP_unbuffed_" + buildnr).innerHTML = EP_unbuffed.toFixed(0);   //numeral(EP_unbuffed).format('0,0');
    document.getElementById(profession + "_EHP_unbuffed_" + buildnr).innerHTML = numeral(EHP_unbuffed).format('0,0');
    document.getElementById(profession + "_armor_unbuffed_" + buildnr).innerHTML = armor.toFixed(0);  //numeral(armor).format('0,0');
    document.getElementById(profession + "_health_unbuffed_" + buildnr).innerHTML = numeral(unb_health).format('0,0');

    document.getElementById(profession + "_EP_buffed_" + buildnr).innerHTML = EP_buffed.toFixed(0);   //numeral(EP_buffed).format('0,0');
    document.getElementById(profession + "_EHP_buffed_" + buildnr).innerHTML = numeral(EHP_buffed).format('0,0');
    document.getElementById(profession + "_armor_buffed_" + buildnr).innerHTML = buf_armor.toFixed(0);  //numeral(armor).format('0,0');
    document.getElementById(profession + "_health_buffed_" + buildnr).innerHTML = numeral(buf_health).format('0,0');

    if (document.getElementById("highlight").checked) {
        highlightHighest(profession);
    }

}

//calculates a specific column of the displayed profession
function deltaEHP(bnr){ 
    var result;

    for (var i = 0; i < 9; i++) {
        if ($('#collapse' + professions[i]).hasClass('in')) {
            result = professions[i].toLowerCase();
            break;
        }
    }
    calculate(result,bnr);
}

//updates the attribute arrays (party buffs at very top) by checking the checkboxes
function applyBuff(bnr) {
    if (!isCheckingBuffs) {
        if (document.getElementById('party_grd1_' + bnr).checked) { party_SiN[bnr] = 1 } else { party_SiN[bnr] = 0 };

        if (document.getElementById('party_war1_' + bnr).checked) { party_Empower[bnr] = 1 } else { party_Empower[bnr] = 0 };
        if (document.getElementById('party_war2_' + bnr).checked) { party_banDis[bnr] = 1 } else { party_banDis[bnr] = 0 };
        if (document.getElementById('party_war3_' + bnr).checked) { party_banStr[bnr] = 1 } else { party_banStr[bnr] = 0 };
        if (document.getElementById('party_war4_' + bnr).checked) { party_banTac[bnr] = 1 } else { party_banTac[bnr] = 0 };
        if (document.getElementById('party_war5_' + bnr).checked) { party_banDef[bnr] = 1 } else { party_banDef[bnr] = 0 };

        if (document.getElementById('party_rev1_' + bnr).checked) { party_Assassin[bnr] = 1 } else { party_Assassin[bnr] = 0 };
        if (document.getElementById('party_rev2_' + bnr).checked) { party_Rite[bnr] = 1 } else { party_Rite[bnr] = 0 };

        if (document.getElementById('party_rng1_' + bnr).checked) { party_Spotter[bnr] = 1 } else { party_Spotter[bnr] = 0 };
        deltaEHP(bnr);
    }
}
//for loading the buff panel
function applyBuffCheckboxes(bnr) {
    if (party_SiN[bnr] == 1) { document.getElementById('party_grd1_' + bnr).checked = true } else { document.getElementById('party_grd1_' + bnr).checked = false; };

    if (party_Empower[bnr] == 1) { document.getElementById('party_war1_' + bnr).checked = true } else { document.getElementById('party_war1_' + bnr).checked = false };
    if (party_banDis[bnr] == 1) { document.getElementById('party_war2_' + bnr).checked = true } else { document.getElementById('party_war2_' + bnr).checked = false };
    if (party_banStr[bnr] == 1) { document.getElementById('party_war3_' + bnr).checked = true } else { document.getElementById('party_war3_' + bnr).checked = false };
    if (party_banTac[bnr] == 1) { document.getElementById('party_war4_' + bnr).checked = true } else { document.getElementById('party_war4_' + bnr).checked = false };
    if (party_banDef[bnr] == 1) { document.getElementById('party_war5_' + bnr).checked = true } else { document.getElementById('party_war5_' + bnr).checked = false };

    if (party_Assassin[bnr] == 1) { document.getElementById('party_rev1_' + bnr).checked = true } else { document.getElementById('party_rev1_' + bnr).checked = false };
    if (party_Rite[bnr] == 1)     { document.getElementById('party_rev2_' + bnr).checked = true } else { document.getElementById('party_rev2_' + bnr).checked = false };

    if (party_Spotter[bnr] == 1) { document.getElementById('party_rng1_' + bnr).checked = true } else { document.getElementById('party_rng1_' + bnr).checked = false };
}

//for the delete-buffs-button, resets all the buffs to non-checked
function clearBuffs() {
    if (confirm('Are you sure you want to delete ALL buffs from the panel?')){
        for (var j = 0 ; j < buffArray.length; j++) {
            for (var k = 1; k < 6 ; k++)  buffArray[j][k] = 0;  //set all the buffs to 0
        }

        for (var bnr = 1 ; bnr < 6 ; bnr++) {
            applyBuffCheckboxes(bnr); //update the checkboxes
        }
        partyOn(1);
    }
}

//calculates the condition durations
function condicalc() {
    var amountofbuilds = 4;

    var base = Number(document.getElementById('condibase').value);
    var plus1 = Number(document.getElementById('pluscondi_1').value);
    var plus2 = Number(document.getElementById('pluscondi_2').value);

    var min = [0,0,0,0,0]
    min[1] = Number(document.getElementById('mincondi_1').value);
    min[2] = Number(document.getElementById('mincondi_2').value);
    min[3] = Number(document.getElementById('mincondi_3').value);
    min[4] = Number(document.getElementById('mincondi_4').value);

    
    if (document.getElementById('purge_yes_1').checked) {
        min[1] -= 33;
        min[2]-= 33;
        min[3] -= 33;
        min[4] -= 33;
    }

    for (b = 1; b <= amountofbuilds ; b++) {
        var clc1 = 100 + min[b] + plus1;
        var clc2 = 100 + min[b] + plus2;

        if (clc1 > 200) {
            clc1 = 200;
        }
        if (clc2 > 200) {
            clc2 = 200;
        }

        var col1 = (clc1) / 100 * base;
        var col2 = (clc2) / 100 * base;

        if (col1<0){
            col1 = 0;
        }
        if (col2 < 0) {
            col2 = 0;
        }

        document.getElementById("build1_" + b).innerHTML = col1.toFixed(2);
        document.getElementById("build2_" + b).innerHTML = col2.toFixed(2);
        document.getElementById("dif_" + b).innerHTML = (col2 - col1).toFixed(2) + " seconds";
        var con = (col2 / (col1 + 0.000000001));
        if (con < 0.005 && con > -0.003) {
            document.getElementById("factor_" + b).innerHTML = "Immune";
        } else if (con > 100 || con == 0) {
            document.getElementById("factor_" + b).innerHTML = "Infinite";
        } else {
            document.getElementById("factor_" + b).innerHTML = con.toFixed(2) + " x";
        }
    }
}

function calc_condidmg() {
    //get duration,condi damage, might, stacks&dur
    var might = Number(document.getElementById("cdmg_might").value);
    var cdamage =  Number(document.getElementById("cdmg_dmg").value) + might*30;

   
    var conditions = ["bleed", "burn", "poison", "confusion", "torment", "fear"];
    var condidamage = [];
    var variables = [0,0,0,0,0,0,0,0,0,0,0,0,0,];
    var cond = "";

    for (i = 0; i < 6; i++) {
        cond = conditions[i];
        variables[i*2] = Number(document.getElementById("cdmg_" + cond).value);
        variables[i*2+1] =  Number(document.getElementById("cdmg_" + cond + "_dur").value);
    }
    //calculate damage for all 6 condis
    condidamage[0] = (22 + (0.06 * cdamage)) * variables[0];        //* variables[1]    bleeding
    condidamage[1] = (131.5 + (0.155 * cdamage)) * variables[2];    //* variables[3]    burning
    condidamage[2] = (33.5 + (0.06 * cdamage)) * variables[4];      //* variables[5]    poison
    condidamage[3] = (26 + (0.04 * cdamage)) * variables[6];        //* variables[7]    confusion
    condidamage[4] = (15.9 + (0.045 * cdamage)) * variables[8];     //* variables[9]    torment
    condidamage[5] = (443 + (0.4 * cdamage)) * 0.67;                //* variables[11]   fear
    // condidamage[6] = 202 + (0.3 * cdamage);                      //* Chill damage removed by Anet
    
    //write to DPS and total
    for (i = 0; i < 6; i++) {
        cond = conditions[i];
        document.getElementById(cond + "_dps").innerHTML = (condidamage[i]).toFixed(0);
        document.getElementById(cond + "_dmg").innerHTML = numeral(condidamage[i] * variables[i * 2 + 1]).format('0,0');
    }

    //write to Extra (conf, torment, fear)
    document.getElementById("confusion_spc").innerHTML = "+ " + numeral((49.5 + 0.0625 * cdamage) * variables[6]).format('0,0') + "  per cast";
    document.getElementById("torment_spc").innerHTML = numeral(condidamage[4]*2).format('0,0') + "/sec  if moving";
    document.getElementById("fear_spc").innerHTML = numeral(condidamage[5]/0.67).format('0,0') + "/sec  if other condi";

    //calculate total
}

function calc_critchance(precision) {
    var percent = (precision - 895) / 21;
    if (percent > 100) {
        percent = 100;
    }
    if (percent < 5) {
        percent = 5;
    }
    return percent;
}

function activeBox(profession) {
    document.getElementById("create_guardian").checked = false;
    document.getElementById("create_warrior").checked = false;
    document.getElementById("create_revenant").checked = false;

    document.getElementById("create_engineer").checked = false;
    document.getElementById("create_ranger").checked = false;
    document.getElementById("create_thief").checked = false;

    document.getElementById("create_mesmer").checked = false;
    document.getElementById("create_elementalist").checked = false;
    document.getElementById("create_necromancer").checked = false;

    document.getElementById("create_" + profession).checked = true;
     
}

//sharing of data
function createShare(profession) {
    //creating arrays for data
    var name = [0, 0, 0, 0, 0, 0];
    var link = [0, 0, 0, 0, 0, 0];
    var notes = [0, 0, 0, 0, 0, 0];

    var power = [0, 0, 0, 0, 0, 0];
    var precision = [0, 0, 0, 0, 0, 0];
    var ferocity = [0, 0, 0, 0, 0, 0];

    var toughness = [0, 0, 0, 0, 0, 0];
    var vitality = [0, 0, 0, 0, 0, 0];
    var healingpower = [0, 0, 0, 0, 0, 0];

    var multiplier = [0, 0, 0, 0, 0, 0];
    var critbonus = [0, 0, 0, 0, 0, 0];
    var might = [0, 0, 0, 0, 0, 0];
    var fury = [0, 0, 0, 0, 0, 0];

    var vuln = [0, 0, 0, 0, 0, 0];
    var bloodlust = [0, 0, 0, 0, 0, 0];
    var gstacks = [0, 0, 0, 0, 0, 0];

    var armor = [0, 0, 0, 0, 0, 0];
    var weapon = [0, 0, 0, 0, 0, 0];

    //filling arrays with data
    for (bnr = 1; bnr < 6; bnr++) {
        name[bnr] = encodeURIComponent(document.getElementById(profession + "_bname_" + bnr).value);
        link[bnr] = encodeURIComponent(document.getElementById(profession + "_ilink_" + bnr).value);
        notes[bnr] = encodeURIComponent(document.getElementById(profession + "_notes_" + bnr).value);

        power[bnr] = Number(document.getElementById(profession + "_power_" + bnr).value);
        precision[bnr] = Number(document.getElementById(profession + "_precision_" + bnr).value);
        ferocity[bnr] = Number(document.getElementById(profession + "_ferocity_" + bnr).value);

        toughness[bnr] = Number(document.getElementById(profession + "_toughness_" + bnr).value);
        vitality[bnr] = Number(document.getElementById(profession + "_vitality_" + bnr).value);
        healingpower[bnr] = Number(document.getElementById(profession + "_healing_" + bnr).value);

        multiplier[bnr] = Number(document.getElementById(profession + "_multiplier_" + bnr).value);
        critbonus[bnr] = Number(document.getElementById(profession + "_critbonus_" + bnr).value);
        might[bnr] = Number(document.getElementById(profession + "_might_" + bnr).value);
        fury[bnr] = Number(document.getElementById(profession + "_fury_" + bnr).value / 100);

        vuln[bnr] = Number(document.getElementById(profession + "_vulnerability_" + bnr).value);
        bloodlust[bnr] = Number(document.getElementById(profession + "_bloodlust_" + bnr).value);
        //gstacks[bnr] = Number(document.getElementById(profession + "_gstacks_" + bnr).value);        //removed from the game


        if (document.getElementById(profession + "_gearasc_" + bnr).checked) {
            armor[bnr] = 'A';
        }
        else {
            armor[bnr] = 'E';
        }
        if (document.getElementById(profession + "_weapasc_" + bnr).checked) {
            weapon[bnr] = 'A';
        }
        else {
            weapon[bnr] = 'E';
        }

    }


    //converting to strings                                                                                                                                             //no need for ;?
    var nameString = name[1].toString() + ";" + name[2].toString() + ";" + name[3].toString() + ";" + name[4].toString() + ";" + name[5].toString() + ";|"
    var linkString = link[1].toString() + ";" + link[2].toString() + ";" + link[3].toString() + ";" + link[4].toString() + ";" + link[5].toString() + ";|"
    var notesString = notes[1].toString() + ";" + notes[2].toString() + ";" + notes[3].toString() + ";" + notes[4].toString() + ";" + notes[5].toString() + ";|"

    var powerString = power[1].toString() + ";" + power[2].toString() + ";" + power[3].toString() + ";" + power[4].toString() + ";" + power[5].toString() + ";|"
    var precisionString = precision[1].toString() + ";" + precision[2].toString() + ";" + precision[3].toString() + ";" + precision[4].toString() + ";" + precision[5].toString() + ";|"
    var ferocityString = ferocity[1].toString() + ";" + ferocity[2].toString() + ";" + ferocity[3].toString() + ";" + ferocity[4].toString() + ";" + ferocity[5].toString() + ";|"

    var toughnessString = toughness[1].toString() + ";" + toughness[2].toString() + ";" + toughness[3].toString() + ";" + toughness[4].toString() + ";" + toughness[5].toString() + ";|"
    var vitalityString = vitality[1].toString() + ";" + vitality[2].toString() + ";" + vitality[3].toString() + ";" + vitality[4].toString() + ";" + vitality[5].toString() + ";|"
    var healingpowerString = healingpower[1].toString() + ";" + healingpower[2].toString() + ";" + healingpower[3].toString() + ";" + healingpower[4].toString() + ";" + healingpower[5].toString() + ";|"

    var multiplierString = multiplier[1].toString() + ";" + multiplier[2].toString() + ";" + multiplier[3].toString() + ";" + multiplier[4].toString() + ";" + multiplier[5].toString() + ";|"
    var critbonusString = critbonus[1].toString() + ";" + critbonus[2].toString() + ";" + critbonus[3].toString() + ";" + critbonus[4].toString() + ";" + critbonus[5].toString() + ";|"
    var mightString = might[1].toString() + ";" + might[2].toString() + ";" + might[3].toString() + ";" + might[4].toString() + ";" + might[5].toString() + ";|"
    var furyString = fury[1].toString() + ";" + fury[2].toString() + ";" + fury[3].toString() + ";" + fury[4].toString() + ";" + fury[5].toString() + ";|"

    var vulnString = vuln[1].toString() + ";" + vuln[2].toString() + ";" + vuln[3].toString() + ";" + vuln[4].toString() + ";" + vuln[5].toString() + ";|"
    var bloodlustString = bloodlust[1].toString() + ";" + bloodlust[2].toString() + ";" + bloodlust[3].toString() + ";" + bloodlust[4].toString() + ";" + bloodlust[5].toString() + ";|"
    var gstacksString = gstacks[1].toString() + ";" + gstacks[2].toString() + ";" + gstacks[3].toString() + ";" + gstacks[4].toString() + ";" + gstacks[5].toString() + ";|"                //not needed anymore, but still here to keep old links compatible

    var armorString = armor[1] + ";" + armor[2] + ";" + armor[3] + ";" + armor[4] + ";" + armor[5] + ";|"
    var weapString = weapon[1] + ";" + weapon[2] + ";" + weapon[3] + ";" + weapon[4] + ";" + weapon[5] + ";"

    //adding strings together
    var shareString = "(" + profession + "|" + nameString + linkString + notesString + powerString + precisionString + ferocityString + toughnessString + vitalityString + healingpowerString + multiplierString + critbonusString + mightString + furyString + vulnString + bloodlustString + gstacksString + armorString + weapString + ")";


    //###### BUFF PANEL #######//
    //check if any buffs are selected, if not then don't include buffs in link
    var includeBuffs = false;
    for (var i = 0; i <buffArray.length; i++){
        for (var j = 1; j < 6; j++){
            if (buffArray[i][j] == 1) {
                includeBuffs = true;
                break;
            }
        }
        if (includeBuffs) break; //we can stop checking the rest of the arrays as soon as includeBuffs becomes true 
    }

    //now, start adding party buffs
    if (party_On && includeBuffs) {
        var buildnrs;
        buffString = "(party:";

        //for each buff, check if it's enabled on any of the builds. If so, add it to the string  
        for (i = 0 ; i < buffArray.length ; i++) {
            buildnrs = readBuffs(i);
            if (buildnrs != "") buffString += buffArrayStrings[i] + buildnrs + ";"; //add the buff to the string if it didn't return zero, along with a seperator for the parser
        }
        
        //creating sharing string for the party buffs
        buffString += ")";
        shareString += buffString;
    }
    else {
        //don't add party buffs when they are turned off.
    }

    return shareString;
}

function readBuffs(buff_index) {
    //
    var bnrArray = ""; //bnrArray is string of numbers, easier than an array because we don't interact with it anymore

    for (var j = 1; j < 6; j++) { 
        if (buffArray[buff_index][j] == 1) {    //finds the buildnumbers where the buff is turned on
            bnrArray += j;
        }
    }
    return bnrArray; //return the string of buildnumbers with buff turned on
}

function loadShare(shareString) {
    var oldSep = '|',
        newSep = ':',
        Sep;

    if (shareString.indexOf('|') > 0) {
        Sep = oldSep;
        //shareString = shareString.split('|').join(':'); //for compatability with older strings. New version uses : instead of | to make links parse better in other software
        //splitting and rejoining is actually faster than replacing in V8; slower on some mobile devices however.
    }
    else {
        Sep = newSep;
    }

    //creating arrays for data
    var name = [0, 0, 0, 0, 0, 0];
    var link = [0, 0, 0, 0, 0, 0];
    var notes = [0, 0, 0, 0, 0, 0];

    var power = [0, 0, 0, 0, 0, 0];
    var precision = [0, 0, 0, 0, 0, 0];
    var ferocity = [0, 0, 0, 0, 0, 0];

    var toughness = [0, 0, 0, 0, 0, 0];
    var vitality = [0, 0, 0, 0, 0, 0];
    var healingpower = [0, 0, 0, 0, 0, 0];

    var multiplier = [0, 0, 0, 0, 0, 0];
    var critbonus = [0, 0, 0, 0, 0, 0];
    var might = [0, 0, 0, 0, 0, 0];
    var fury = [0, 0, 0, 0, 0, 0];

    var vuln = [0, 0, 0, 0, 0, 0];
    var bloodlust = [0, 0, 0, 0, 0, 0];
    var gstacks = [0, 0, 0, 0, 0, 0];

    var armor = [0, 0, 0, 0, 0, 0];
    var weapon = [0, 0, 0, 0, 0, 0];

    //retrieving profession
    var profession = "";

    var reader = shareString.indexOf("(") + 1;
    //check if reader has picked up (


    var step_2 = shareString.indexOf(Sep, reader);
    for (reader; reader < step_2; reader++) {
        profession += shareString.charAt(reader);
    }

    //decoding names
    reader = Number(step_2 + 1);                        //skipping the seperators
    var end_name = shareString.indexOf(Sep, reader);          //end of name input
    for (i = 1; i < 6; i++) {
        var step = shareString.indexOf(";", reader);      //getting end (;) of each name input
        name[i] = ("");                             //making sure array has strings, not numbers

        for (reader ; reader < step ; reader++) {          //filling in different builds
            name[i] += shareString.charAt(reader);

        };

        reader += 1;                                        //skips ';'
    }

    reader = Number(end_name + 1);                        //skipping the seperators, making sure reader is still on point

    //decoding links
    var end_link = shareString.indexOf(Sep, reader);          //end of link input
    for (i = 1; i < 6; i++) {
        var step = shareString.indexOf(";", reader);      //getting end (;) of each name input
        link[i] = ("")                             //making sure array has strings, not numbers

        for (reader ; reader < step ; reader++) {          //filling in different builds
            link[i] += shareString.charAt(reader);
        };
        reader += 1;                                        //skips ';'
    }
    reader = Number(end_link + 1);                        //skipping the seperators, making sure reader is still on point

    //decoding notes
    var end_notes = shareString.indexOf(Sep, reader);          //end of link input
    for (i = 1; i < 6; i++) {
        var step = shareString.indexOf(";", reader);      //getting end (;) of each name input
        notes[i] = ("")                             //making sure array has strings, not numbers

        for (reader ; reader < step ; reader++) {          //filling in different builds
            notes[i] += shareString.charAt(reader);
        };
        reader += 1;                                        //skips ';'
    }
    reader = Number(end_notes + 1);                        //skipping the seperators, making sure reader is still on point

    //decoding power
    var end_power = shareString.indexOf(Sep, reader);
    for (i = 1; i < 6; i++) {
        var step = shareString.indexOf(";", reader);
        power[i] = ("")

        for (reader ; reader < step ; reader++) {
            power[i] += shareString.charAt(reader);
        };
        reader += 1;
    }
    reader = Number(end_power + 1);


    //decoding precision
    var end_precision = shareString.indexOf(Sep, reader);
    for (i = 1; i < 6; i++) {
        var step = shareString.indexOf(";", reader);
        precision[i] = ("")

        for (reader ; reader < step ; reader++) {
            precision[i] += shareString.charAt(reader);
        };
        reader += 1;
    }
    reader = Number(end_precision + 1);


    //decoding ferocity
    var end_ferocity = shareString.indexOf(Sep, reader);
    for (i = 1; i < 6; i++) {
        var step = shareString.indexOf(";", reader);
        ferocity[i] = ("")

        for (reader ; reader < step ; reader++) {
            ferocity[i] += shareString.charAt(reader);
        };
        reader += 1;
    }
    reader = Number(end_ferocity + 1);

    //decoding toughness
    var end_toughness = shareString.indexOf(Sep, reader);
    for (i = 1; i < 6; i++) {
        var step = shareString.indexOf(";", reader);
        toughness[i] = ("")

        for (reader ; reader < step ; reader++) {
            toughness[i] += shareString.charAt(reader);
        };
        reader += 1;
    }
    reader = Number(end_toughness + 1);

    //decoding vitality
    var end_vitality = shareString.indexOf(Sep, reader);
    for (i = 1; i < 6; i++) {
        var step = shareString.indexOf(";", reader);
        vitality[i] = ("")

        for (reader ; reader < step ; reader++) {
            vitality[i] += shareString.charAt(reader);
        };
        reader += 1;
    }
    reader = Number(end_vitality + 1);

    //decoding healingpower
    var end_healingpower = shareString.indexOf(Sep, reader);
    for (i = 1; i < 6; i++) {
        var step = shareString.indexOf(";", reader);
        healingpower[i] = ("")

        for (reader ; reader < step ; reader++) {
            healingpower[i] += shareString.charAt(reader);
        };
        reader += 1;
    }
    reader = Number(end_healingpower + 1);

    //decoding multiplier
    var end_multiplier = shareString.indexOf(Sep, reader);
    for (i = 1; i < 6; i++) {
        var step = shareString.indexOf(";", reader);
        multiplier[i] = ("")

        for (reader ; reader < step ; reader++) {
            multiplier[i] += shareString.charAt(reader);
        };
        reader += 1;
    }
    reader = Number(end_multiplier + 1);

    //decoding critbonus
    var end_critbonus = shareString.indexOf(Sep, reader);
    for (i = 1; i < 6; i++) {
        var step = shareString.indexOf(";", reader);
        critbonus[i] = ("")

        for (reader ; reader < step ; reader++) {
            critbonus[i] += shareString.charAt(reader);
        };
        reader += 1;
    }
    reader = Number(end_critbonus + 1);

    //decoding might
    var end_might = shareString.indexOf(Sep, reader);
    for (i = 1; i < 6; i++) {
        var step = shareString.indexOf(";", reader);
        might[i] = ("")

        for (reader ; reader < step ; reader++) {
            might[i] += shareString.charAt(reader);
        };
        reader += 1;
    }
    reader = Number(end_might + 1);

    //decoding fury
    var end_fury = shareString.indexOf(Sep, reader);
    for (i = 1; i < 6; i++) {
        var step = shareString.indexOf(";", reader);
        fury[i] = ("")

        for (reader ; reader < step ; reader++) {
            fury[i] += shareString.charAt(reader);
        };
        reader += 1;
    }
    reader = Number(end_fury + 1);

    //decoding vuln
    var end_vuln = shareString.indexOf(Sep, reader);
    for (i = 1; i < 6; i++) {
        var step = shareString.indexOf(";", reader);
        vuln[i] = ("")

        for (reader ; reader < step ; reader++) {
            vuln[i] += shareString.charAt(reader);
        };
        reader += 1;
    }
    reader = Number(end_vuln + 1);

    //decoding bloodlust
    var end_bloodlust = shareString.indexOf(Sep, reader);
    for (i = 1; i < 6; i++) {
        var step = shareString.indexOf(";", reader);
        bloodlust[i] = ("")

        for (reader ; reader < step ; reader++) {
            bloodlust[i] += shareString.charAt(reader);
        };
        reader += 1;
    }
    reader = Number(end_bloodlust + 1);

    //decoding gstacks
    var end_gstacks = shareString.indexOf(Sep, reader);
    for (i = 1; i < 6; i++) {
        var step = shareString.indexOf(";", reader);
        gstacks[i] = ("")

        for (reader ; reader < step ; reader++) {
            //gstacks[i] += shareString.charAt(reader);     //don't need to load guard stacks anymore
        };
        reader += 1;
    }
    reader = Number(end_gstacks + 1);

    //decoding armor
    var end_armor = shareString.indexOf(Sep, reader);
    for (i = 1; i < 6; i++) {
        var step = shareString.indexOf(";", reader);
        armor[i] = ("")

        for (reader ; reader < step ; reader++) {
            armor[i] += shareString.charAt(reader);
        };
        reader += 1;
    }
    reader = Number(end_armor + 1);

    //decoding weapon
    var end_weapon = shareString.indexOf(")", reader);
    for (i = 1; i < 6; i++) {
        var step = shareString.indexOf(";", reader);
        weapon[i] = ("")

        for (reader ; reader < step ; reader++) {
            weapon[i] += shareString.charAt(reader);
        };
        reader += 1;
    }
    reader = Number(end_weapon + 1);


    //######## EXTRACT BUFFS FROM shareString ############//
    var buffstringStart = shareString.indexOf("(party:");

    if (buffstringStart > 0) {
        //only load panel when it is actually saved in the link
        party_On = 1;
        buffstringStart = shareString.indexOf(":", buffstringStart);
        var buffstringEnd = shareString.indexOf(")", buffstringStart),
            startRead,
            buffSlice;

        buffString = shareString.slice(buffstringStart, buffstringEnd); // retrieves the buffString from the shareString.
        isCheckingBuffs = true;                                             //prevents the checkboxes from looping because of onchange events.
        
        for (i = 0; i < buffArray.length; i++) {                            //check for each of the buffs if they are present in the buffString
            startRead = buffString.indexOf(buffArrayStrings[i]);
            if (startRead > 0) {
                //buff found, now find the build numbers for which the buff applies
                buffSlice = buffString.slice(startRead, buffString.indexOf(";", startRead));       // the semi-colon ';' indicates the end of the specific buff, so create a slice until that point
                for (var j = 1; j < 6; j++) {
                    if (buffSlice.indexOf(j) > 0) buffArray[i][j] = 1;  //number found, so apply buff to the build with that number
                    else buffArray[i][j] = 0; //number not found, so disable buff for that build                   
                }
            }
        }
        for (i = 1; i < 6; i++) applyBuffCheckboxes(i);

        isCheckingBuffs = false;
        document.getElementById('party_yes_1').checked = true;
        document.getElementById('party_no_1').checked = false;
        $('#partyToggleGroup').button('toggle');
        
    }
    

    isLoading = true; //prevents the highlighting of stats in between builds, which would slow the loading down
    for (bnr = 1; bnr < 6 ; bnr++) {
        document.getElementById(profession + "_bname_" + bnr).value = decodeURIComponent(name[bnr]);
        document.getElementById(profession + "_ilink_" + bnr).value = decodeURIComponent(link[bnr]);
        document.getElementById(profession + "_notes_" + bnr).value = decodeURIComponent(notes[bnr]);

        //only load values that aren't 0 - getElementById is slower than an if-statement.
        if (power[bnr] != 0) { document.getElementById(profession + "_power_" + bnr).value = Number(power[bnr]); }
        if (precision[bnr] != 0) { document.getElementById(profession + "_precision_" + bnr).value = Number(precision[bnr]); }
        if (ferocity[bnr] != 0) { document.getElementById(profession + "_ferocity_" + bnr).value = Number(ferocity[bnr]); }

        if (toughness[bnr] != 0) { document.getElementById(profession + "_toughness_" + bnr).value = Number(toughness[bnr]); }
        if (vitality[bnr] != 0) { document.getElementById(profession + "_vitality_" + bnr).value = Number(vitality[bnr]); }
        if (healingpower[bnr] != 0) { document.getElementById(profession + "_healing_" + bnr).value = Number(healingpower[bnr]); }

        document.getElementById(profession + "_critbonus_" + bnr).value = Number(critbonus[bnr]);
        document.getElementById(profession + "_multiplier_" + bnr).value = Number(multiplier[bnr]);
        document.getElementById(profession + "_might_" + bnr).value = Number(might[bnr]);
        document.getElementById(profession + "_fury_" + bnr).value = Number(fury[bnr]) * 100;

        document.getElementById(profession + "_vulnerability_" + bnr).value = Number(vuln[bnr]);
        document.getElementById(profession + "_bloodlust_" + bnr).value = Number(bloodlust[bnr]);
        //document.getElementById(profession + "_gstacks_" + bnr).value = Number(gstacks[bnr]);     /don't need to fill in guard stacks anymore

        if (armor[bnr] == 'E') {
            $('#' + profession + "_gearexo_" + bnr).trigger('click');
            $('#' + profession + '_gearasc_' + bnr).removeClass('active');
            $('#' + profession + '_gearexo_' + bnr).addClass('active');
        }
        if (weapon[bnr] == 'E') {
            $('#' + profession + "_weapexo_" + bnr).trigger('click');
            $('#' + profession + '_weapasc_' + bnr).removeClass('active');
            $('#' + profession + '_weapexo_' + bnr).addClass('active');
        }
        
        if (power[bnr] != 0) {
            calculate(profession, bnr);
        }
        else {
            clearBuild(profession, bnr, 'n'); //removes the builds without power
        }
    }
    isLoading = false;
    highlightHighest(profession);

    profession = profession.charAt(0).toUpperCase() + profession.slice(1);
    $('#collapse' + profession).collapse('show');
}

//switching builds left/right
function moveBuild(profession, ToLeft, ToRight) {

    var name, link, notes, power, precision, ferocity, toughness, vitality, healingpower, multiplier, critbonus, might, fury, vuln, bloodlust, armor, weapon;
  
    //variables only act as buffer for swapping
    //########### BUFFER RIGHT BUILD ########## 
    name = document.getElementById(profession + "_bname_" + ToLeft).value;
    link = document.getElementById(profession + "_ilink_" + ToLeft).value;
    notes = document.getElementById(profession + "_notes_" + ToLeft).value;

    power = Number(document.getElementById(profession + "_power_" + ToLeft).value);
    precision = Number(document.getElementById(profession + "_precision_" + ToLeft).value);
    ferocity = Number(document.getElementById(profession + "_ferocity_" + ToLeft).value);

    toughness = Number(document.getElementById(profession + "_toughness_" + ToLeft).value);
    vitality = Number(document.getElementById(profession + "_vitality_" + ToLeft).value);
    healingpower = Number(document.getElementById(profession + "_healing_" + ToLeft).value);

    multiplier = Number(document.getElementById(profession + "_multiplier_" + ToLeft).value);
    critbonus = Number(document.getElementById(profession + "_critbonus_" + ToLeft).value);
    might = Number(document.getElementById(profession + "_might_" + ToLeft).value);
    fury = Number(document.getElementById(profession + "_fury_" + ToLeft).value);

    vuln = Number(document.getElementById(profession + "_vulnerability_" + ToLeft).value);
    bloodlust = Number(document.getElementById(profession + "_bloodlust_" + ToLeft).value);

    if (document.getElementById(profession + "_gearasc_" + ToLeft).checked) {
        armor = 'A';
    }
    else {
        armor = 'E';
    }
    if (document.getElementById(profession + "_weapasc_" + ToLeft).checked) {
        weapon = 'A';
    }
    else {
        weapon = 'E';
    }
    // ########## END BUFFERING #########


    //Moving the left build to right
    document.getElementById(profession + "_bname_" + ToLeft).value = document.getElementById(profession + "_bname_" + ToRight).value;
    document.getElementById(profession + "_ilink_" + ToLeft).value = document.getElementById(profession + "_ilink_" + ToRight).value;
    document.getElementById(profession + "_notes_" + ToLeft).value = document.getElementById(profession + "_notes_" + ToRight).value;

    document.getElementById(profession + "_power_" + ToLeft).value = document.getElementById(profession + "_power_" + ToRight).value;
    document.getElementById(profession + "_precision_" + ToLeft).value = document.getElementById(profession + "_precision_" + ToRight).value;
    document.getElementById(profession + "_ferocity_" + ToLeft).value = document.getElementById(profession + "_ferocity_" + ToRight).value;

    document.getElementById(profession + "_toughness_" + ToLeft).value = document.getElementById(profession + "_toughness_" + ToRight).value;
    document.getElementById(profession + "_vitality_" + ToLeft).value = document.getElementById(profession + "_vitality_" + ToRight).value;
    document.getElementById(profession + "_healing_" + ToLeft).value = document.getElementById(profession + "_healing_" + ToRight).value;

    document.getElementById(profession + "_critbonus_" + ToLeft).value = document.getElementById(profession + "_critbonus_" + ToRight).value;
    document.getElementById(profession + "_multiplier_" + ToLeft).value = document.getElementById(profession + "_multiplier_" + ToRight).value;
    document.getElementById(profession + "_might_" + ToLeft).value = document.getElementById(profession + "_might_" + ToRight).value;
    document.getElementById(profession + "_fury_" + ToLeft).value = document.getElementById(profession + "_fury_" + ToRight).value;

    document.getElementById(profession + "_vulnerability_" + ToLeft).value = document.getElementById(profession + "_vulnerability_" + ToRight).value;
    document.getElementById(profession + "_bloodlust_" + ToLeft).value = document.getElementById(profession + "_bloodlust_" + ToRight).value;

    if (document.getElementById(profession + "_gearexo_" + ToRight).checked) {
        $('#' + profession + "_gearexo_" + ToLeft).trigger('click');
        $('#' + profession + '_gearasc_' + ToLeft).removeClass('active');
        $('#' + profession + '_gearexo_' + ToLeft).addClass('active');
    }
    else {
        $('#' + profession + "_gearasc_" + ToLeft).trigger('click');
        $('#' + profession + '_gearexo_' + ToLeft).removeClass('active');
        $('#' + profession + '_gearasc_' + ToLeft).addClass('active');
    }
    if (document.getElementById(profession + "_weapexo_" + ToRight).checked) {
        $('#' + profession + "_weapexo_" + ToLeft).trigger('click');
        $('#' + profession + '_weapasc_' + ToLeft).removeClass('active');
        $('#' + profession + '_weapexo_' + ToLeft).addClass('active');
    }
    else {
        $('#' + profession + "_weapasc_" + ToLeft).trigger('click');
        $('#' + profession + '_weapexo_' + ToLeft).removeClass('active');
        $('#' + profession + '_weapasc_' + ToLeft).addClass('active');
    }
   
    //Restoring right build into left slot, from buffer
    document.getElementById(profession + "_bname_" + ToRight).value = name;
    document.getElementById(profession + "_ilink_" + ToRight).value = link;
    document.getElementById(profession + "_notes_" + ToRight).value = notes;

    document.getElementById(profession + "_power_" + ToRight).value = power;
    document.getElementById(profession + "_precision_" + ToRight).value = precision;
    document.getElementById(profession + "_ferocity_" + ToRight).value = ferocity;

    document.getElementById(profession + "_toughness_" + ToRight).value = toughness;
    document.getElementById(profession + "_vitality_" + ToRight).value = vitality;
    document.getElementById(profession + "_healing_" + ToRight).value = healingpower;

    document.getElementById(profession + "_critbonus_" + ToRight).value = critbonus;
    document.getElementById(profession + "_multiplier_" + ToRight).value = multiplier;
    document.getElementById(profession + "_might_" + ToRight).value = might;
    document.getElementById(profession + "_fury_" + ToRight).value = fury;

    document.getElementById(profession + "_vulnerability_" + ToRight).value = vuln; 
    document.getElementById(profession + "_bloodlust_" + ToRight).value = bloodlust;

    if (armor == 'E') {
        $('#' + profession + "_gearexo_" + ToRight).trigger('click');
        $('#' + profession + '_gearasc_' + ToRight).removeClass('active');
        $('#' + profession + '_gearexo_' + ToRight).addClass('active');
    }
    else {
        $('#' + profession + "_gearasc_" + ToRight).trigger('click');
        $('#' + profession + '_gearexo_' + ToRight).removeClass('active');
        $('#' + profession + '_gearasc_' + ToRight).addClass('active');
    }
    if (weapon == 'E') {
        $('#' + profession + "_weapexo_" + ToRight).trigger('click');
        $('#' + profession + '_weapasc_' + ToRight).removeClass('active');
        $('#' + profession + '_weapexo_' + ToRight).addClass('active');
    }
    else {
        $('#' + profession + "_weapasc_" + ToRight).trigger('click');
        $('#' + profession + '_weapexo_' + ToRight).removeClass('active');
        $('#' + profession + '_weapasc_' + ToRight).addClass('active');
    }
    //end of build-moving function
    
    calculate(profession, ToLeft);
    calculate(profession, ToRight);

    if (power == 0 && link == "")
    {
        clearBuild(profession, ToRight, 'n');
    }
    if (document.getElementById(profession + "_power_" + ToLeft).value == 0 && document.getElementById(profession + "_ilink_" + ToLeft).value == "") {
        clearBuild(profession, ToLeft, 'n');
    }
}

function clearBuild(profession, bnr, confirmation) {

    if (confirmation == "y") {
        var YouSure = confirm("Are you sure you want to delete: \n\n" + profession + " build #" + bnr + "\n\n" + document.getElementById(profession + "_bname_" + bnr).value);
    }

    if (YouSure || confirmation == "n")
    {
        document.getElementById(profession + "_bname_" + bnr).value = "";
        document.getElementById(profession + "_ilink_" + bnr).value = "";
        document.getElementById(profession + "_notes_" + bnr).value = "";

        document.getElementById(profession + "_power_" + bnr).value = null;
        document.getElementById(profession + "_precision_" + bnr).value = null;
        document.getElementById(profession + "_ferocity_" + bnr).value = null;

        document.getElementById(profession + "_toughness_" + bnr).value = null;
        document.getElementById(profession + "_vitality_" + bnr).value = null;
        document.getElementById(profession + "_healing_" + bnr).value = null;

        document.getElementById(profession + "_critbonus_" + bnr).value = Number(0);
        document.getElementById(profession + "_multiplier_" + bnr).value = Number(1.00);
        document.getElementById(profession + "_might_" + bnr).value = Number(25);
        document.getElementById(profession + "_fury_" + bnr).value = Number(50);

        document.getElementById(profession + "_vulnerability_" + bnr).value = Number(0);
        document.getElementById(profession + "_bloodlust_" + bnr).value = Number(0);

        if (document.getElementById(profession + "_gearasc_" + bnr).checked == false) {
            document.getElementById(profession + "_gearasc_" + bnr).checked = true;
            $('#' + profession + "_gearasc_" + bnr).trigger('click');
            $('#' + profession + '_gearexo_' + bnr).removeClass('active');
            $('#' + profession + '_gearasc_' + bnr).addClass('active');
        }
        if (document.getElementById(profession + "_weapasc_" + bnr).checked == false) {
            document.getElementById(profession + "_weapasc_" + bnr).checked = true;
            $('#' + profession + "_weapasc_" + bnr).trigger('click');
            $('#' + profession + '_weapexo_' + bnr).removeClass('active');
            $('#' + profession + '_weapasc_' + bnr).addClass('active');
        }

        //remove all values
        document.getElementById(profession + "_critchance_" + bnr).innerHTML = null;

        document.getElementById(profession + "_EP_unbuffed_" + bnr).innerHTML = null;
        document.getElementById(profession + "_EHP_unbuffed_" + bnr).innerHTML = null;
        document.getElementById(profession + "_armor_unbuffed_" + bnr).innerHTML = null;
        document.getElementById(profession + "_health_unbuffed_" + bnr).innerHTML = null;

        document.getElementById(profession + "_EP_buffed_" + bnr).innerHTML = null;
        document.getElementById(profession + "_EHP_buffed_" + bnr).innerHTML = null;
        document.getElementById(profession + "_armor_buffed_" + bnr).innerHTML = null;
        document.getElementById(profession + "_health_buffed_" + bnr).innerHTML = null;
        if (profession == 'necromancer') {
            document.getElementById(profession + "_EP_death_" + bnr).innerHTML = null;
        }
    }
    highlightHighest(profession);
}

//collects the data and uses the other functions below/*
function highlightHighest(profession) {
    if (!isLoading) {
        var crit = [0, 0, 0, 0, 0, 0],
            critbuffer = 0,

        unbuffed_EP = [0, 0, 0, 0, 0, 0],
        unbuffed_EHP = [0, 0, 0, 0, 0, 0],
        unbuffed_health = [0, 0, 0, 0, 0, 0],
        unbuffed_armor = [0, 0, 0, 0, 0, 0],

        buffed_EP = [0, 0, 0, 0, 0, 0],
        buffed_EHP = [0, 0, 0, 0, 0, 0],
        buffed_armor = [0, 0, 0, 0, 0, 0],
        buffed_health = [0, 0, 0, 0, 0, 0],

        dp_EP = [0, 0, 0, 0, 0, 0];

        //look through all EP, eHP, Health, Armor (for buffed and unbuffed) - fill in the respective arrays
        for (bnr = 1; bnr < 6 ; bnr++) {
            critbuffer = (document.getElementById(profession + "_critchance_" + bnr).innerHTML).split(' %').join('');
            crit[bnr] = Number(critbuffer);
            //if (crit[bnr] == "100.0") crit[bnr] = 999;  //required to make 100% be recognised as highest. Javascript plz...

            unbuffed_EP[bnr] = Number(document.getElementById(profession + "_EP_unbuffed_" + bnr).innerHTML);
            unbuffed_EHP[bnr] = Number(numeral().unformat(document.getElementById(profession + "_EHP_unbuffed_" + bnr).innerHTML));
            unbuffed_armor[bnr] = Number(document.getElementById(profession + "_armor_unbuffed_" + bnr).innerHTML);
            unbuffed_health[bnr] = Number(numeral().unformat(document.getElementById(profession + "_health_unbuffed_" + bnr).innerHTML));

            buffed_EP[bnr] = Number(document.getElementById(profession + "_EP_buffed_" + bnr).innerHTML);
            buffed_EHP[bnr] = Number(numeral().unformat(document.getElementById(profession + "_EHP_buffed_" + bnr).innerHTML));
            buffed_armor[bnr] = Number(document.getElementById(profession + "_armor_buffed_" + bnr).innerHTML);
            buffed_health[bnr] = Number(numeral().unformat(document.getElementById(profession + "_health_buffed_" + bnr).innerHTML));

            if (profession == "necromancer") {
                dp_EP[bnr] = Number((document.getElementById(profession + "_EP_death_" + bnr).innerHTML));
            }
        }
        
        //adding highlights, could do it in for-loop, but this works for now.
        addHighlight(profession, "_critchance_", crit);

        addHighlight(profession, "_EP_unbuffed_", unbuffed_EP);
        addHighlight(profession, "_EHP_unbuffed_", unbuffed_EHP);
        addHighlight(profession, "_armor_unbuffed_", unbuffed_armor);
        addHighlight(profession, "_health_unbuffed_", unbuffed_health);

        addHighlight(profession, "_EP_buffed_", buffed_EP);
        addHighlight(profession, "_EHP_buffed_", buffed_EHP);
        addHighlight(profession, "_armor_buffed_", buffed_armor);
        addHighlight(profession, "_health_buffed_", buffed_health);
        if (profession == "necromancer") {
            addHighlight(profession, "_EP_death_", dp_EP);
        }
    }
}

function highlightAuto() {
    for (i = 0; i < 9; i++) {
        if (document.getElementById("create_" + professions[i]).checked) {
            highlightHighest(professions[i])
        }
    }
}

//puts the CSS class onto the relevant cell
function addHighlight(profession,ElementID,Array) {
    
    var highestIndex = findHighest(Array)
    //if highestIndex is 0, then do nothing - there is no highest value
    
    if (highestIndex != 0)
    {
        //remove class from all cells in row
        for (var i = 1; i < 6; i++) {
            //check if values in array have same value as the found highest, then apply highlight too - otherwise only highest with first index would highlight.
            //also check if highlight feature is actually enabled.
            if (Array[i] == Array[highestIndex] && document.getElementById("highlight").checked) { 
                $('#' + profession + ElementID + i).addClass('highest');
            }
            else {
                $('#' + profession + ElementID + i).removeClass('highest'); //only remove the highlight if the newer value is higher - this way equal values both get highlights.
            }
        }
    }
    else { //wipe every highlight when all builds are empty
        for (i = 1; i < 6; i++) {
            $('#' + profession + ElementID + i).removeClass('highest'); 
        }
    }
}

//finds highest index of the array
function findHighest(arr) {
    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }
    return maxIndex;
}

//################ BUILD SAVING SYSTEM ########################
function saveBuilds(profession) {
    if (typeof (Storage) !== "undefined") {
        var inputName = encodeURI(document.getElementById(profession + "_newsave").value);
        var save = createShare(profession);
        var slot = 0;

        for (i = 1; i < 6; i++) {
            if (document.getElementById(profession + '_slot' + i).checked) {
                slot = i;
                break;
            }
        }
        if (slot > 0) {
            if (!inputName) {
                inputName = "Slot # " + slot + " (no name)"
            }
            localStorage.setItem(profession + slot + 'name', inputName);
            localStorage.setItem(profession + slot + 'build', save);
            $('#' + profession + '_savemenu').removeClass('open');
        }

    }
    else {
        alert("Your browser does not support HTML5 Local Storage. Please upgrade to a newer version");
    }
}

function loadBuild(profession) {
    if (typeof (Storage) !== "undefined") {
        for (i = 1; i < 6; i++) {
            if (document.getElementById(profession + '_slotload' + i).checked) {
                slot = i;
                break;
            }
        }
        if (slot > 0) {
            var nameLoaded = localStorage.getItem(profession + slot + 'name');
            var buildsLoaded = localStorage.getItem(profession + slot + 'build');
            loadShare(buildsLoaded);
            $('#' + profession + '_loadmenu').removeClass('open');
        }
    }
    else {
        alert("Your browser does not support HTML5 Local Storage. Please upgrade to a newer version");
    }
}


function createLink() {
    var ilink = "http://gw2power.com/?builds=";
    var professionSelected = false;
    for (i = 0; i < 9; i++) {
        if (document.getElementById("create_" + professions[i].toLowerCase()).checked) {
            ilink += createShare(professions[i].toLowerCase()).replace(buffString, ""); //remove the buffString from each seperate profession, otherwise it will be linked once for each profession linked.
            var professionSelected = true;
        }
    }
    if (professionSelected) {
        if (party_On == 1) ilink += buffString; //add buffString back at the end, so it appears only once
        document.getElementById("link").value = ilink;
    }
    else {
        document.getElementById("link").value = "Select a profession first";
    }
    $('#collapseLink').collapse('show');
    window.scrollTo(0,0);
}


function SelectAll(id) {    //selects all text in a box
    document.getElementById(id).focus();
    document.getElementById(id).select();
}

function selectSlot(profession, slot) {
    for (i = 1; i < 6; i++) {
        document.getElementById(profession + '_slot' + i).checked = false;
    }
    document.getElementById(profession + '_slot' + slot).checked = true;

    if (typeof (Storage) !== "undefined") {
        if (localStorage.getItem(profession + slot + 'name')) {
            $('#' + profession + '_savebtn').prop('value', 'Overwrite');
        }
        else {
            $('#' + profession + '_savebtn').prop('value', 'Save');
        }
    }
    else {
        alert("Your browser does not support HTML5 Local Storage. Please upgrade to a newer version");
    }

}
function selectSlotLoad(profession, slot) { //identical, but for loading
    for (i = 1; i < 6; i++) {
        document.getElementById(profession + '_slotload' + i).checked = false;
    }
    document.getElementById(profession + '_slotload' + slot).checked = true;

    if (typeof (Storage) !== "undefined") {
        if (localStorage.getItem(profession + slot + 'name')) {
            $('#' + profession + '_loadbtn').prop('value', 'Load');
        }
        else {
            $('#' + profession + '_loadbtn').prop('value', 'Slot Empty');
        }
    }
    else {
        alert("Your browser does not support HTML5 Local Storage. Please upgrade to a newer version");
    }

}

function openLoad(profession, state) {
    if (typeof (Storage) !== "undefined") {
        if (state == 'save') {
            for (i = 1; i < 6; i++) {
                if (localStorage.getItem(profession + i + 'name')) {
                    document.getElementById(profession + '_label' + i).innerHTML = decodeURI(localStorage.getItem(profession + i + 'name'));
                }
                else {
                    //document.getElementById("teststring").innerHTML = "empty";
                    document.getElementById(profession + '_label' + i).innerHTML = "Slot #" + i + " is empty";
                }
            }
        }
        if (state == 'load') {
            for (i = 1; i < 6; i++) {
                if (localStorage.getItem(profession + i + 'name')) {
                    document.getElementById(profession + '_labelload' + i).innerHTML = decodeURI(localStorage.getItem(profession + i + 'name'));
                }
                else {
                    //document.getElementById("teststring").innerHTML = "empty";
                    document.getElementById(profession + '_labelload' + i).innerHTML = "Slot #" + i + " is empty";
                }
            }
        }

    }
    else {
        alert("Your browser does not support HTML5 Local Storage. Please upgrade to a newer version");
    }
}

function openLink(link) {
    var goto = (document.getElementById(link).value)
    if (goto != "")
    {
        if (goto.indexOf('http://') < 0)
        {
            goto = "http://" + goto;
        }
        window.open(goto, "_blank");
    }
}

function get_short_url() {
    $.getJSON(
        "http://api.bitly.com/v3/shorten?callback=?",
        {
            "format": "json",
            "apiKey": "YourApiKeyHere",
            "login": "YourLoginHere",
            "longUrl": document.getElementById("link").value
        },
        function (response) {
            longlink = document.getElementById("link").value
            if (longlink.indexOf("bit.ly") > 1) {
            }
            else {
                document.getElementById("link").value = (response.data.url);
            }
        }
    );
}

!function (a) { "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery) }(function (a) { function b(b) { var g = b || window.event, h = i.call(arguments, 1), j = 0, l = 0, m = 0, n = 0, o = 0, p = 0; if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) { if (1 === g.deltaMode) { var q = a.data(this, "mousewheel-line-height"); j *= q, m *= q, l *= q } else if (2 === g.deltaMode) { var r = a.data(this, "mousewheel-page-height"); j *= r, m *= r, l *= r } if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) { var s = this.getBoundingClientRect(); o = b.clientX - s.left, p = b.clientY - s.top } return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h) } } function c() { f = null } function d(a, b) { return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0 } var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"], i = Array.prototype.slice; if (a.event.fixHooks) for (var j = g.length; j;) a.event.fixHooks[g[--j]] = a.event.mouseHooks; var k = a.event.special.mousewheel = { version: "3.1.12", setup: function () { if (this.addEventListener) for (var c = h.length; c;) this.addEventListener(h[--c], b, !1); else this.onmousewheel = b; a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this)) }, teardown: function () { if (this.removeEventListener) for (var c = h.length; c;) this.removeEventListener(h[--c], b, !1); else this.onmousewheel = null; a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height") }, getLineHeight: function (b) { var c = a(b), d = c["offsetParent" in a.fn ? "offsetParent" : "parent"](); return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16 }, getPageHeight: function (b) { return a(b).height() }, settings: { adjustOldDeltas: !0, normalizeOffset: !0 } }; a.fn.extend({ mousewheel: function (a) { return a ? this.bind("mousewheel", a) : this.trigger("mousewheel") }, unmousewheel: function (a) { return this.unbind("mousewheel", a) } }) });
(function () { function a(a) { this._value = a } function b(a, b, c, d) { var e, f, g = Math.pow(10, b); return f = (c(a * g) / g).toFixed(b), d && (e = new RegExp("0{1," + d + "}$"), f = f.replace(e, "")), f } function c(a, b, c) { var d; return d = b.indexOf("$") > -1 ? e(a, b, c) : b.indexOf("%") > -1 ? f(a, b, c) : b.indexOf(":") > -1 ? g(a, b) : i(a._value, b, c) } function d(a, b) { var c, d, e, f, g, i = b, j = ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], k = !1; if (b.indexOf(":") > -1) a._value = h(b); else if (b === q) a._value = 0; else { for ("." !== o[p].delimiters.decimal && (b = b.replace(/\./g, "").replace(o[p].delimiters.decimal, ".")), c = new RegExp("[^a-zA-Z]" + o[p].abbreviations.thousand + "(?:\\)|(\\" + o[p].currency.symbol + ")?(?:\\))?)?$"), d = new RegExp("[^a-zA-Z]" + o[p].abbreviations.million + "(?:\\)|(\\" + o[p].currency.symbol + ")?(?:\\))?)?$"), e = new RegExp("[^a-zA-Z]" + o[p].abbreviations.billion + "(?:\\)|(\\" + o[p].currency.symbol + ")?(?:\\))?)?$"), f = new RegExp("[^a-zA-Z]" + o[p].abbreviations.trillion + "(?:\\)|(\\" + o[p].currency.symbol + ")?(?:\\))?)?$"), g = 0; g <= j.length && !(k = b.indexOf(j[g]) > -1 ? Math.pow(1024, g + 1) : !1) ; g++); a._value = (k ? k : 1) * (i.match(c) ? Math.pow(10, 3) : 1) * (i.match(d) ? Math.pow(10, 6) : 1) * (i.match(e) ? Math.pow(10, 9) : 1) * (i.match(f) ? Math.pow(10, 12) : 1) * (b.indexOf("%") > -1 ? .01 : 1) * ((b.split("-").length + Math.min(b.split("(").length - 1, b.split(")").length - 1)) % 2 ? 1 : -1) * Number(b.replace(/[^0-9\.]+/g, "")), a._value = k ? Math.ceil(a._value) : a._value } return a._value } function e(a, b, c) { var d, e, f = b.indexOf("$"), g = b.indexOf("("), h = b.indexOf("-"), j = ""; return b.indexOf(" $") > -1 ? (j = " ", b = b.replace(" $", "")) : b.indexOf("$ ") > -1 ? (j = " ", b = b.replace("$ ", "")) : b = b.replace("$", ""), e = i(a._value, b, c), 1 >= f ? e.indexOf("(") > -1 || e.indexOf("-") > -1 ? (e = e.split(""), d = 1, (g > f || h > f) && (d = 0), e.splice(d, 0, o[p].currency.symbol + j), e = e.join("")) : e = o[p].currency.symbol + j + e : e.indexOf(")") > -1 ? (e = e.split(""), e.splice(-1, 0, j + o[p].currency.symbol), e = e.join("")) : e = e + j + o[p].currency.symbol, e } function f(a, b, c) { var d, e = "", f = 100 * a._value; return b.indexOf(" %") > -1 ? (e = " ", b = b.replace(" %", "")) : b = b.replace("%", ""), d = i(f, b, c), d.indexOf(")") > -1 ? (d = d.split(""), d.splice(-1, 0, e + "%"), d = d.join("")) : d = d + e + "%", d } function g(a) { var b = Math.floor(a._value / 60 / 60), c = Math.floor((a._value - 60 * b * 60) / 60), d = Math.round(a._value - 60 * b * 60 - 60 * c); return b + ":" + (10 > c ? "0" + c : c) + ":" + (10 > d ? "0" + d : d) } function h(a) { var b = a.split(":"), c = 0; return 3 === b.length ? (c += 60 * Number(b[0]) * 60, c += 60 * Number(b[1]), c += Number(b[2])) : 2 === b.length && (c += 60 * Number(b[0]), c += Number(b[1])), Number(c) } function i(a, c, d) { var e, f, g, h, i, j, k = !1, l = !1, m = !1, n = "", r = !1, s = !1, t = !1, u = !1, v = !1, w = "", x = "", y = Math.abs(a), z = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], A = "", B = !1; if (0 === a && null !== q) return q; if (c.indexOf("(") > -1 ? (k = !0, c = c.slice(1, -1)) : c.indexOf("+") > -1 && (l = !0, c = c.replace(/\+/g, "")), c.indexOf("a") > -1 && (r = c.indexOf("aK") >= 0, s = c.indexOf("aM") >= 0, t = c.indexOf("aB") >= 0, u = c.indexOf("aT") >= 0, v = r || s || t || u, c.indexOf(" a") > -1 ? (n = " ", c = c.replace(" a", "")) : c = c.replace("a", ""), y >= Math.pow(10, 12) && !v || u ? (n += o[p].abbreviations.trillion, a /= Math.pow(10, 12)) : y < Math.pow(10, 12) && y >= Math.pow(10, 9) && !v || t ? (n += o[p].abbreviations.billion, a /= Math.pow(10, 9)) : y < Math.pow(10, 9) && y >= Math.pow(10, 6) && !v || s ? (n += o[p].abbreviations.million, a /= Math.pow(10, 6)) : (y < Math.pow(10, 6) && y >= Math.pow(10, 3) && !v || r) && (n += o[p].abbreviations.thousand, a /= Math.pow(10, 3))), c.indexOf("b") > -1) for (c.indexOf(" b") > -1 ? (w = " ", c = c.replace(" b", "")) : c = c.replace("b", ""), g = 0; g <= z.length; g++) if (e = Math.pow(1024, g), f = Math.pow(1024, g + 1), a >= e && f > a) { w += z[g], e > 0 && (a /= e); break } return c.indexOf("o") > -1 && (c.indexOf(" o") > -1 ? (x = " ", c = c.replace(" o", "")) : c = c.replace("o", ""), x += o[p].ordinal(a)), c.indexOf("[.]") > -1 && (m = !0, c = c.replace("[.]", ".")), h = a.toString().split(".")[0], i = c.split(".")[1], j = c.indexOf(","), i ? (i.indexOf("[") > -1 ? (i = i.replace("]", ""), i = i.split("["), A = b(a, i[0].length + i[1].length, d, i[1].length)) : A = b(a, i.length, d), h = A.split(".")[0], A = A.split(".")[1].length ? o[p].delimiters.decimal + A.split(".")[1] : "", m && 0 === Number(A.slice(1)) && (A = "")) : h = b(a, null, d), h.indexOf("-") > -1 && (h = h.slice(1), B = !0), j > -1 && (h = h.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1" + o[p].delimiters.thousands)), 0 === c.indexOf(".") && (h = ""), (k && B ? "(" : "") + (!k && B ? "-" : "") + (!B && l ? "+" : "") + h + A + (x ? x : "") + (n ? n : "") + (w ? w : "") + (k && B ? ")" : "") } function j(a, b) { o[a] = b } function k(a) { var b = a.toString().split("."); return b.length < 2 ? 1 : Math.pow(10, b[1].length) } function l() { var a = Array.prototype.slice.call(arguments); return a.reduce(function (a, b) { var c = k(a), d = k(b); return c > d ? c : d }, -1 / 0) } var m, n = "1.5.3", o = {}, p = "en", q = null, r = "0,0", s = "undefined" != typeof module && module.exports; m = function (b) { return m.isNumeral(b) ? b = b.value() : 0 === b || "undefined" == typeof b ? b = 0 : Number(b) || (b = m.fn.unformat(b)), new a(Number(b)) }, m.version = n, m.isNumeral = function (b) { return b instanceof a }, m.language = function (a, b) { if (!a) return p; if (a && !b) { if (!o[a]) throw new Error("Unknown language : " + a); p = a } return (b || !o[a]) && j(a, b), m }, m.languageData = function (a) { if (!a) return o[p]; if (!o[a]) throw new Error("Unknown language : " + a); return o[a] }, m.language("en", { delimiters: { thousands: ",", decimal: "." }, abbreviations: { thousand: "k", million: "m", billion: "b", trillion: "t" }, ordinal: function (a) { var b = a % 10; return 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th" }, currency: { symbol: "$" } }), m.zeroFormat = function (a) { q = "string" == typeof a ? a : null }, m.defaultFormat = function (a) { r = "string" == typeof a ? a : "0.0" }, "function" != typeof Array.prototype.reduce && (Array.prototype.reduce = function (a, b) { "use strict"; if (null === this || "undefined" == typeof this) throw new TypeError("Array.prototype.reduce called on null or undefined"); if ("function" != typeof a) throw new TypeError(a + " is not a function"); var c, d, e = this.length >>> 0, f = !1; for (1 < arguments.length && (d = b, f = !0), c = 0; e > c; ++c) this.hasOwnProperty(c) && (f ? d = a(d, this[c], c, this) : (d = this[c], f = !0)); if (!f) throw new TypeError("Reduce of empty array with no initial value"); return d }), m.fn = a.prototype = { clone: function () { return m(this) }, format: function (a, b) { return c(this, a ? a : r, void 0 !== b ? b : Math.round) }, unformat: function (a) { return "[object Number]" === Object.prototype.toString.call(a) ? a : d(this, a ? a : r) }, value: function () { return this._value }, valueOf: function () { return this._value }, set: function (a) { return this._value = Number(a), this }, add: function (a) { function b(a, b) { return a + c * b } var c = l.call(null, this._value, a); return this._value = [this._value, a].reduce(b, 0) / c, this }, subtract: function (a) { function b(a, b) { return a - c * b } var c = l.call(null, this._value, a); return this._value = [a].reduce(b, this._value * c) / c, this }, multiply: function (a) { function b(a, b) { var c = l(a, b); return a * c * b * c / (c * c) } return this._value = [this._value, a].reduce(b, 1), this }, divide: function (a) { function b(a, b) { var c = l(a, b); return a * c / (b * c) } return this._value = [this._value, a].reduce(b), this }, difference: function (a) { return Math.abs(m(this._value).subtract(a).value()) } }, s && (module.exports = m), "undefined" == typeof ender && (this.numeral = m), "function" == typeof define && define.amd && define([], function () { return m }) }).call(this);