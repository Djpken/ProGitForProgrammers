$(document).ready(function() {
    var firstclick = true;
    const max_num = 123;

    function fileExists(url) {
        var isExists;
        $.ajax({
            url: url,
            async: false,
            type: 'HEAD',
            error: function() { isExists = 0; },
            success: function() { isExists = 1; }
        });
        if (isExists == 1) {
            return true;
        } else {
            return false;
        }
    }

    function postScore(score) {

        $.ajax({
            url: '/menutest',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ score:score}),
            success: function(data) {
            },
            error: function(responseEntity) {
                alert("建立失敗");
            }
        });
    }

    function correct_ans(i) {
        setTimeout(() => $("#cards_" + i).css("transform", "rotateY(180deg)"), 50 * i);
        $("#cards_" + i + " .bcycle").css("opacity", "0");
        $("#cards_" + i + " .scycle").css("opacity", "0");
    }

    function setmenu() {
        var database = [max_num - (-1)];
        database[1] = "水牛城辣雞翅";
        database[2] = "蜜釀十三香雞翅";
        database[3] = "普丁肉醬薯條";
        database[4] = "舊金山蒜香薯條";
        database[5] = "松露薯條";
        database[6] = "爆漿金沙薯片";
        database[7] = "美墨辣肉醬薯片";
        database[8] = "南方懷舊起司corn";
        database[9] = "經典凱薩沙拉";
        database[10] = "經典凱薩沙拉舒肥雞";
        database[11] = "經典凱薩沙拉燻鮭魚";
        database[12] = "貳樓金牌鹽水雞沙拉";
        database[13] = null; //"深灣烤牛排蜜桃核沙拉"
        database[14] = "焙煎胡麻雞沙拉";
        database[15] = "實打實招牌漢堡";
        database[16] = "朝陽蘑菇肉醬牛肉堡";
        database[17] = "舒肥雞胸佐火腿營養三明治";
        database[18] = "金黃流沙海鮮披薩";
        database[19] = "港式油蔥雞披薩";
        database[20] = "橙香蛋煎丹麥舒肥雞早午餐";
        database[21] = "橙香蛋煎丹麥牛排早午餐";
        database[22] = "橙香蛋煎丹麥佐海鮮洋芋";
        database[23] = "台胃口水雞班尼蛋";
        database[24] = "烤牛排班尼蛋";
        database[25] = "Mexican不老鮭班尼蛋";
        database[26] = "總匯活力歐姆蕾";
        database[27] = "海料嗶啵歐姆蕾";
        database[28] = "肉醬歐蛋法式達";
        database[29] = "橙香蛋煎法棍高蛋白早午餐";
        database[30] = null; //"布蕾法烤丹麥早午餐"
        database[31] = "經典貳樓早午餐";
        database[32] = "hashtag肉桂捲";
        database[33] = "低碳-舒肥嫩雞奶油花椰飯";
        database[34] = "低碳-香煎魚排奶油花椰飯";
        database[35] = "低碳-碳烤牛排奶油花椰飯";
        database[36] = "生酮-總匯海陸拼盤";
        database[37] = "藜麥香烤牛優格Taco袋";
        database[38] = "藜麥巴沙魚優格Taco袋";
        database[39] = "小米煎魚溫沙拉";
        database[40] = "橙香蛋煎法棍烤時蔬早午餐";
        database[41] = "蔬食開放式三明治早午餐";
        database[42] = "巴西莓果優格碗";
        database[43] = "熱帶水果優格碗";
        database[44] = "蜜桃酸奶水果沙拉";
        database[45] = "泡菜豆腐烤蔬菜披薩";
        database[46] = "焦糖胡椒蔬菜細扁麵";
        database[47] = "烤蔬奶油鹽麴細扁麵";
        database[48] = "貝夏梅濃醬焗烤飯";
        database[49] = "南洋辛香風味飯";
        database[50] = "歐爸泡菜野蔬麵";
        database[51] = "手抓咖哩野蔬豆泥烤餅";
        database[52] = "水波蛋咖哩時蔬花椰飯烤餅";
        database[53] = "咖哩時蔬捲餅佐優格醬";
        database[54] = "鷹嘴豆起司優格薄餅";
        database[55] = "酒香蒜味蛤蜊墨魚麵";
        database[56] = "經典青醬鮮蝦細扁麵";
        database[57] = "南洋辛香雙料細扁麵";
        database[58] = "家鄉肉醬麵佐老媽子的肉丸";
        database[59] = "香爆椒麻唐揚雞細扁麵";
        database[60] = "朝日海味奶油蛋黃墨魚麵";
        database[61] = "曙光汁鮮蝦雞肉細扁麵";
        database[62] = "藍帶雞排奶油焗烤飯";
        database[63] = "歐爸辣唐揚雞泡菜飯";
        database[64] = "小東京黑咖哩奶油牛排飯";
        database[65] = "歐式麵包盤";
        database[66] = "主廚濃湯";
        database[67] = "番茄蔬菜湯";
        database[68] = "安妞辣洋釀炸雞";
        database[69] = "香烤起司馬鈴薯";
        database[70] = "超多汁酥炸蘑菇";
        database[71] = "美式起司QQ球";
        database[72] = "布蕾波波冰淇淋杯";
        database[73] = "金銀島冰淇淋杯";
        database[74] = null;
        database[75] = null;
        database[76] = null;
        database[77] = null;
        database[78] = null;
        database[79] = null;
        database[80] = null;
        database[81] = null;
        database[82] = null;
        database[83] = null;
        database[84] = null;
        database[85] = "主廚脆皮豬腳";
        database[86] = null; //"費城炸牛排佐甜豆泥吐司"
        database[87] = "BBQ溫烤半雞";
        database[88] = "吃光光雞肉蛋包飯";
        database[89] = "熊孩子雞肉奶油通心粉";
        database[90] = "怪博士吐司";
        database[91] = "最愛棒棒糖早午餐";
        database[92] = "鹽麴奶油雞肉飯";
        database[93] = "經典青醬雞肉細扁麵";
        database[94] = "厚起司蛋漿牛肉堡";
        database[95] = "蜜桃覆盆子雪沙";
        database[96] = "桑葚野莓雪沙";
        database[97] = "焦糖香草奶昔";
        database[98] = "奧利奧黑巧奶昔";
        database[99] = null;
        database[100] = null;
        database[101] = null;
        database[102] = null;
        database[103] = "天堂鳥冰茶";
        database[104] = "冰盛夏光年";
        database[105] = "熱盛夏光年";
        database[106] = null;
        database[107] = null;
        database[108] = "冰經典拿鐵";
        database[109] = null;
        database[110] = "冰黑糖拿鐵";
        database[111] = "熱黑糖拿鐵";
        database[112] = null;
        database[113] = "熱焦糖海鹽拿鐵";
        database[114] = "西西里氣泡咖啡";
        database[115] = null;
        database[116] = null;
        database[117] = null;
        database[118] = null;
        database[119] = null;
        database[120] = null;
        database[121] = null;
        database[122] = "大人味提拉米蘇";
        database[123] = "經典火腿班尼蛋";
        var correct = 0,
            num_problem = 0;
        for (let i = 1; i <= max_num; i++) {
            if (database[i] != null) {
                num_problem++
                var sol = database[i].toLowerCase();
                var x = $("#cards_" + i + " input").val();
                if (x == undefined) {
                    urans = null;
                } else {
                    var urans = x.toLowerCase();
                }
                if (urans != null && urans == sol) {
                    correct_ans(i);
                    database[i] = null;
                    correct++;
                } else if (sol != null && urans != sol) {
                    $("<div/>", { "class": "wrong_answer" }).appendTo("#cards_" + i + ">.card_front");
                    $("#cards_" + i + " .wrong_answer").html(database[i]);
                }
            }
        }
        if (firstclick == true) {
            firstclick = false;
            $(".result_button").html("正確:" + correct + "/" + num_problem);
            $(".return_page").css("visibility", "visible");
            postScore(correct);
        }
    }

    function call(card) {
        $("<div/>", { "id": "cards_" + card, "class": "cards" }).appendTo("main");
        $("<div/>", { "class": "card_front" }).appendTo("#cards_" + card);
        $("<img/>", { "src": "img/" + card + ".jpg" }).appendTo("#cards_" + card + ">.card_front");
        $("<input/>", { "type": "text", "name": "uid", "placeholder": "請輸入菜名" }).appendTo("#cards_" + card + ">.card_front");
        $("<div/>", { "class": "bcycle" }).appendTo("#cards_" + card + ">.card_front");
        $("<div/>", { "class": "scycle" }).appendTo("#cards_" + card + ">.card_front");
        $("<div/>", { "class": "card_flip" }).appendTo("#cards_" + card);
        if (card == max_num) {
            // 下方為提示
            $("#cards_10 input").attr("placeholder", "沙拉名+種類");
            $("#cards_11 input").attr("placeholder", "沙拉名+種類");
            $("#cards_14 input").attr("placeholder", "焙+");
            $("#cards_25 input").attr("placeholder", "Mexican+");
            $("#cards_37 input").attr("placeholder", "牛");
            $("#cards_38 input").attr("placeholder", "魚");
            $("#cards_104 input").attr("placeholder", "冰+");
            $("#cards_105 input").attr("placeholder", "熱+");
            $("#cards_108 input").attr("placeholder", "冰+");
            $("#cards_110 input").attr("placeholder", "冰+");
            $("#cards_111 input").attr("placeholder", "熱+");
            $("#cards_113 input").attr("placeholder", "熱+");
        }
    }
    for (let i = 1; i <= max_num; i++) {
        if (fileExists("img/" + i + ".jpg")) {
            setTimeout(() => call(i), 25 * i)
        }
    }
    var div = $("body>div");
    div.remove();
    console.clear();
    $('.result_button').click(function() {
        setmenu()
    });
    $('.return_page').click(function() {
        $(location).attr("href", "index.html")
    });

});