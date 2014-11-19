
/*开发过程中用作备份的零散代码，使用者可不必关注
*/

html: function (code, theme) {
    var
        //关键字（暂时不处理 br，下文处理）
        keywords = 'DOCTYPE html body h1 h2 h3 h4 h5 h6 p ' +
                    ' hr b ont i en big strong small sup sub bdo u pre code tt ' +
                    ' address blockquote center a link frame frameset input button textarea ' +
                    ' select optgroup option label fieldset legend ul ol li dl dt ' +
                    ' dd menu img map area table caption th td tr thead tbody tfooter ' +
                    ' col colgroup style div span head title meta base script applet object param',
        rkeywords = keywordsToReg(keywords),
        //html没有行注释
        rlineComment = /^0$/,
        //块注释
        rblockComment = /&lt;!--.*?--&gt;/gm,
        ////javascript 或 css 代码
        //rScriptAndStyle = //igm;
        code,
        hl = new HL(rkeywords, undefined, rlineComment, rblockComment);

    ////处理 script 和 style 代码
    //hl.otherHL = function (code) {
    //    if (rScriptAndStyle.test(code)) {
    //        code = code.replace(rScriptAndStyle, function (a) {
    //            //替换 style/script ... style/script 内容
    //            a = a.replace(/&gt;.*&lt;/gm, function (b) {
    //                //替换 > ... < 内容
    //                b = b.replace(hl.rLabel, function (c) {
    //                    //替换其中的 label 标签
    //                    if (c !== hl.wrapLabel) {
    //                        // <br /> 不替换，其他替换为空字符串
    //                        c = '';
    //                    }
    //                    return c;
    //                });
    //                return b;
    //            });
    //            return a;
    //        });
    //    }
    //    return code;
    //};

    //获取
    code = hl.codeHL(code, theme);

    //将 <br /> 设置关键字
    code = code.replace(/br/igm, function (a) {
        return '<strong style="color:' + theme.keywordColor + '">' + a + '</strong>';
    });

    return code;
}
