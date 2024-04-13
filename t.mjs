import { JSDOM } from "jsdom";

// Your HTML content as a string
const htmlContent = `
<span class='ocr_line' id='line_1_1' title="bbox 336 60 2136 156; baseline -0.003 -25; x_size 83.375; x_descenders 22.25; x_ascenders 20.375">
<span class='ocrx_word' id='word_1_1' title='bbox 336 60 614 156; x_wconf 71'>KOBELC</span>
<span class='ocrx_word' id='word_1_2' title='bbox 614 60 662 156; x_wconf 13'>〇</span>
<span class='ocrx_word' id='word_1_3' title='bbox 1947 91 1992 127; x_wconf 23'>P、</span>
<span class='ocrx_word' id='word_1_4' title='bbox 2028 86 2136 125; x_wconf 10'>百</span>
<span class='ocrx_word' id='word_1_5' title='bbox 2090 61 2114 152; x_wconf 44'>一</span>
<span class='ocrx_word' id='word_1_6' title='bbox 2113 61 2137 152; x_wconf 96'>2</span>
</span>
<span class='ocr_line' id='line_1_2' title="bbox 340 367 798 413; baseline 0.004 -3; x_size 61.380371; x_descenders 16.380369; x_ascenders 15">
<span class='ocrx_word' id='word_1_7' title='bbox 340 371 372 410; x_wconf 84'>1.</span>
<span class='ocrx_word' id='word_1_8' title='bbox 455 367 576 413; x_wconf 95'>日常</span>
<span class='ocrx_word' id='word_1_9' title='bbox 600 367 683 413; x_wconf 96'>運転</span>
<span class='ocrx_word' id='word_1_10' title='bbox 682 363 718 434; x_wconf 97'>の</span>
<span class='ocrx_word' id='word_1_11' title='bbox 717 367 798 413; x_wconf 94'>保守</span>
</span>
<span class='ocr_line' id='line_1_3' title="bbox 390 521 2086 568; baseline -0.005 0; x_size 83.375; x_descenders 22.25; x_ascenders 20.375">
<span class='ocrx_word' id='word_1_12' title='bbox 390 527 436 568; x_wconf 69'>(1)</span>
<span class='ocrx_word' id='word_1_13' title='bbox 490 529 529 568; x_wconf 0'>生</span>
<span class='ocrx_word' id='word_1_14' title='bbox 535 526 599 568; x_wconf 0'>縮</span>
<span class='ocrx_word' id='word_1_15' title='bbox 621 526 697 568; x_wconf 88'>機運</span>
<span class='ocrx_word' id='word_1_16' title='bbox 711 526 743 568; x_wconf 84'>転</span>
<span class='ocrx_word' id='word_1_17' title='bbox 754 529 762 565; x_wconf 95'>中</span>
<span class='ocrx_word' id='word_1_18' title='bbox 771 527 792 565; x_wconf 90'>は</span>
<span class='ocrx_word' id='word_1_19' title='bbox 805 524 894 566; x_wconf 96'>各部</span>
<span class='ocrx_word' id='word_1_20' title='bbox 903 524 981 568; x_wconf 91'>温度</span>
<span class='ocrx_word' id='word_1_21' title='bbox 984 499 1007 591; x_wconf 93'>,</span>
<span class='ocrx_word' id='word_1_22' title='bbox 1018 524 1114 566; x_wconf 91'>圧力</span>
<span class='ocrx_word' id='word_1_23' title='bbox 1116 499 1134 591; x_wconf 93'>,</span>
<span class='ocrx_word' id='word_1_24' title='bbox 1168 524 1276 566; x_wconf 96'>振動</span>
<span class='ocrx_word' id='word_1_25' title='bbox 1284 527 1320 562; x_wconf 96'>等</span>
<span class='ocrx_word' id='word_1_26' title='bbox 1334 530 1362 559; x_wconf 97'>に</span>
<span class='ocrx_word' id='word_1_27' title='bbox 1363 499 1404 591; x_wconf 96'>つき</span>
<span class='ocrx_word' id='word_1_28' title='bbox 1421 539 1449 545; x_wconf 86'>一</span>
<span class='ocrx_word' id='word_1_29' title='bbox 1472 521 1539 563; x_wconf 58'>定時</span>
<span class='ocrx_word' id='word_1_30' title='bbox 1553 523 1617 563; x_wconf 91'>間</span>
<span class='ocrx_word' id='word_1_31' title='bbox 1633 526 1663 560; x_wconf 87'>毎</span>
<span class='ocrx_word' id='word_1_32' title='bbox 1675 523 1692 563; x_wconf 96'>に</span>
<span class='ocrx_word' id='word_1_33' title='bbox 1693 521 1801 563; x_wconf 96'>記録</span>
<span class='ocrx_word' id='word_1_34' title='bbox 1817 523 1842 560; x_wconf 96'>を</span>
<span class='ocrx_word' id='word_1_35' title='bbox 1858 535 1881 559; x_wconf 96'>と</span>
<span class='ocrx_word' id='word_1_36' title='bbox 1881 499 1910 591; x_wconf 96'>っ</span>
<span class='ocrx_word' id='word_1_37' title='bbox 1909 526 1933 560; x_wconf 96'>て</span>
<span class='ocrx_word' id='word_1_38' title='bbox 1955 521 2019 562; x_wconf 93'>下さ</span>
<span class='ocrx_word' id='word_1_39' title='bbox 2032 526 2049 559; x_wconf 93'>い</span>
<span class='ocrx_word' id='word_1_40' title='bbox 2059 527 2086 560; x_wconf 92'>。</span>
</span>
<span class='ocr_line' id='line_1_4' title="bbox 495 596 2067 644; baseline 0 -6; x_size 83.375; x_descenders 22.25; x_ascenders 20.375">
<span class='ocrx_word' id='word_1_41' title='bbox 495 607 573 641; x_wconf 96'>この</span>
<span class='ocrx_word' id='word_1_42' title='bbox 583 602 690 644; x_wconf 90'>結果</span>
<span class='ocrx_word' id='word_1_43' title='bbox 692 611 705 629; x_wconf 93'>か</span>
<span class='ocrx_word' id='word_1_44' title='bbox 721 602 779 643; x_wconf 90'>ら</span>
<span class='ocrx_word' id='word_1_45' title='bbox 802 604 831 640; x_wconf 85'>何</span>
<span class='ocrx_word' id='word_1_46' title='bbox 841 602 859 640; x_wconf 83'>ら</span>
<span class='ocrx_word' id='word_1_47' title='bbox 867 610 879 629; x_wconf 93'>か</span>
<span class='ocrx_word' id='word_1_48' title='bbox 887 605 922 640; x_wconf 96'>の</span>
<span class='ocrx_word' id='word_1_49' title='bbox 939 601 1049 641; x_wconf 93'>変化</span>
<span class='ocrx_word' id='word_1_50' title='bbox 1065 602 1095 640; x_wconf 75'>或</span>
<span class='ocrx_word' id='word_1_51' title='bbox 1105 602 1135 641; x_wconf 96'>は</span>
<span class='ocrx_word' id='word_1_52' title='bbox 1150 599 1236 640; x_wconf 90'>異常</span>
<span class='ocrx_word' id='word_1_53' title='bbox 1250 599 1276 641; x_wconf 97'>が</span>
<span class='ocrx_word' id='word_1_54' title='bbox 1282 599 1333 640; x_wconf 91'>あれ</span>
<span class='ocrx_word' id='word_1_55' title='bbox 1336 598 1365 638; x_wconf 96'>ば</span>
<span class='ocrx_word' id='word_1_56' title='bbox 1382 598 1491 640; x_wconf 96'>出来</span>
<span class='ocrx_word' id='word_1_57' title='bbox 1508 599 1532 637; x_wconf 96'>る</span>
<span class='ocrx_word' id='word_1_58' title='bbox 1546 602 1554 635; x_wconf 93'>だ</span>
<span class='ocrx_word' id='word_1_59' title='bbox 1555 599 1582 638; x_wconf 93'>け</span>
<span class='ocrx_word' id='word_1_60' title='bbox 1606 599 1660 640; x_wconf 94'>早く</span>
<span class='ocrx_word' id='word_1_61' title='bbox 1687 599 1758 638; x_wconf 96'>原因</span>
<span class='ocrx_word' id='word_1_62' title='bbox 1773 596 1837 638; x_wconf 96'>を</span>
<span class='ocrx_word' id='word_1_63' title='bbox 1855 576 1912 668; x_wconf 93'>確か</span>
<span class='ocrx_word' id='word_1_64' title='bbox 1911 598 1935 635; x_wconf 93'>め</span>
<span class='ocrx_word' id='word_1_65' title='bbox 1951 598 2009 638; x_wconf 87'>処</span>
<span class='ocrx_word' id='word_1_66' title='bbox 2009 576 2050 668; x_wconf 79'>置</span>
<span class='ocrx_word' id='word_1_67' title='bbox 2049 598 2067 638; x_wconf 96'>を</span>
</span>
<span class='ocr_line' id='line_1_5' title="bbox 391 824 2070 872; baseline -0.004 0; x_size 83.375; x_descenders 22.25; x_ascenders 20.375">
<span class='ocrx_word' id='word_1_68' title='bbox 391 832 438 872; x_wconf 68'>(2)</span>
<span class='ocrx_word' id='word_1_69' title='bbox 490 829 936 872; x_wconf 68'>巡回</span>
<span class='ocrx_word' id='word_1_70' title='bbox 611 804 652 896; x_wconf 96'>時</span>
<span class='ocrx_word' id='word_1_71' title='bbox 651 804 681 896; x_wconf 96'>に</span>
<span class='ocrx_word' id='word_1_72' title='bbox 680 804 732 896; x_wconf 96'>は</span>
<span class='ocrx_word' id='word_1_73' title='bbox 732 804 813 896; x_wconf 94'>常に</span>
<span class='ocrx_word' id='word_1_74' title='bbox 812 804 911 896; x_wconf 92'>圧縮</span>
<span class='ocrx_word' id='word_1_75' title='bbox 910 804 945 896; x_wconf 74'>機</span>
<span class='ocrx_word' id='word_1_76' title='bbox 944 804 962 896; x_wconf 93'>,</span>
<span class='ocrx_word' id='word_1_77' title='bbox 973 827 1116 871; x_wconf 71'>増加</span>
<span class='ocrx_word' id='word_1_78' title='bbox 1082 804 1123 896; x_wconf 36'>機</span>
<span class='ocrx_word' id='word_1_79' title='bbox 1123 804 1141 896; x_wconf 93'>,</span>
<span class='ocrx_word' id='word_1_80' title='bbox 1152 827 1290 869; x_wconf 87'>電動</span>
<span class='ocrx_word' id='word_1_81' title='bbox 1272 804 1302 896; x_wconf 90'>機</span>
<span class='ocrx_word' id='word_1_82' title='bbox 1301 804 1325 896; x_wconf 87'>,</span>
<span class='ocrx_word' id='word_1_83' title='bbox 1364 826 1408 868; x_wconf 87'>油</span>
<span class='ocrx_word' id='word_1_84' title='bbox 1417 832 1440 865; x_wconf 89'>ポ</span>
<span class='ocrx_word' id='word_1_85' title='bbox 1439 804 1497 896; x_wconf 96'>ンプ</span>
<span class='ocrx_word' id='word_1_86' title='bbox 1519 826 1572 868; x_wconf 96'>等</span>
<span class='ocrx_word' id='word_1_87' title='bbox 1587 827 1612 866; x_wconf 93'>に</span>
<span class='ocrx_word' id='word_1_88' title='bbox 1632 824 1671 866; x_wconf 91'>異</span>
<span class='ocrx_word' id='word_1_89' title='bbox 1677 826 1716 863; x_wconf 0'>韻</span>
<span class='ocrx_word' id='word_1_90' title='bbox 1722 826 1750 865; x_wconf 96'>が</span>
<span class='ocrx_word' id='word_1_91' title='bbox 1768 830 1785 862; x_wconf 96'>な</span>
<span class='ocrx_word' id='word_1_92' title='bbox 1791 824 1860 863; x_wconf 96'>いか</span>
<span class='ocrx_word' id='word_1_93' title='bbox 1864 826 1930 866; x_wconf 96'>どう</span>
<span class='ocrx_word' id='word_1_94' title='bbox 1942 826 1980 863; x_wconf 96'>か</span>
<span class='ocrx_word' id='word_1_95' title='bbox 1991 824 2070 866; x_wconf 96'>注意</span>
</span>
<span class='ocr_line' id='line_1_6' title="bbox 499 899 2112 947; baseline -0.005 -1; x_size 83.375; x_descenders 22.25; x_ascenders 20.375">
<span class='ocrx_word' id='word_1_96' title='bbox 499 908 528 946; x_wconf 96'>し</span>
<span class='ocrx_word' id='word_1_97' title='bbox 541 911 573 946; x_wconf 96'>て</span>
<span class='ocrx_word' id='word_1_98' title='bbox 587 907 657 947; x_wconf 93'>下さ</span>
<span class='ocrx_word' id='word_1_99' title='bbox 670 911 723 946; x_wconf 93'>い</span>
<span class='ocrx_word' id='word_1_100' title='bbox 696 878 720 970; x_wconf 92'>。</span>
<span class='ocrx_word' id='word_1_101' title='bbox 765 905 880 946; x_wconf 93'>異常</span>
<span class='ocrx_word' id='word_1_102' title='bbox 886 905 921 943; x_wconf 1'>音</span>
<span class='ocrx_word' id='word_1_103' title='bbox 933 904 955 946; x_wconf 90'>が</span>
<span class='ocrx_word' id='word_1_104' title='bbox 955 878 1011 970; x_wconf 96'>あっ</span>
<span class='ocrx_word' id='word_1_105' title='bbox 1021 908 1057 943; x_wconf 96'>て</span>
<span class='ocrx_word' id='word_1_106' title='bbox 1070 905 1147 946; x_wconf 95'>原因</span>
<span class='ocrx_word' id='word_1_107' title='bbox 1167 905 1234 944; x_wconf 96'>不明</span>
<span class='ocrx_word' id='word_1_108' title='bbox 1254 904 1306 944; x_wconf 97'>の</span>
<span class='ocrx_word' id='word_1_109' title='bbox 1326 904 1404 943; x_wconf 96'>場合</span>
<span class='ocrx_word' id='word_1_110' title='bbox 1411 931 1419 944; x_wconf 93'>は</span>
<span class='ocrx_word' id='word_1_111' title='bbox 1420 878 1444 970; x_wconf 93'>,</span>
<span class='ocrx_word' id='word_1_112' title='bbox 1478 901 1581 943; x_wconf 96'>出来</span>
<span class='ocrx_word' id='word_1_113' title='bbox 1599 902 1622 941; x_wconf 96'>る</span>
<span class='ocrx_word' id='word_1_114' title='bbox 1636 905 1642 938; x_wconf 93'>だ</span>
<span class='ocrx_word' id='word_1_115' title='bbox 1645 902 1697 943; x_wconf 93'>け</span>
<span class='ocrx_word' id='word_1_116' title='bbox 1696 878 1750 970; x_wconf 95'>早く</span>
<span class='ocrx_word' id='word_1_117' title='bbox 1771 901 1887 943; x_wconf 84'>圧縮</span>
<span class='ocrx_word' id='word_1_118' title='bbox 1903 901 1927 943; x_wconf 87'>機</span>
<span class='ocrx_word' id='word_1_119' title='bbox 1941 899 1967 943; x_wconf 92'>を</span>
<span class='ocrx_word' id='word_1_120' title='bbox 1984 902 2067 940; x_wconf 88'>停止</span>
<span class='ocrx_word' id='word_1_121' title='bbox 2070 878 2094 970; x_wconf 96'>し</span>
<span class='ocrx_word' id='word_1_122' title='bbox 2093 905 2112 938; x_wconf 97'>て</span>
</span>
<span class='ocr_line' id='line_1_7' title="bbox 393 1127 2112 1175; baseline -0.006 0; x_size 83.375; x_descenders 22.25; x_ascenders 20.375">
<span class='ocrx_word' id='word_1_123' title='bbox 393 1135 439 1175; x_wconf 50'>3</span>
<span class='ocrx_word' id='word_1_124' title='bbox 493 1133 568 1174; x_wconf 50'>油</span>
<span class='ocrx_word' id='word_1_125' title='bbox 559 1106 594 1197; x_wconf 93'>タ</span>
<span class='ocrx_word' id='word_1_126' title='bbox 593 1135 658 1172; x_wconf 96'>ンク</span>
<span class='ocrx_word' id='word_1_127' title='bbox 669 1138 705 1171; x_wconf 93'>の</span>
<span class='ocrx_word' id='word_1_128' title='bbox 718 1132 788 1174; x_wconf 81'>液</span>
<span class='ocrx_word' id='word_1_129' title='bbox 801 1133 833 1171; x_wconf 18'>面</span>
<span class='ocrx_word' id='word_1_130' title='bbox 832 1106 844 1197; x_wconf 86'>は</span>
<span class='ocrx_word' id='word_1_131' title='bbox 861 1133 865 1169; x_wconf 86'>1</span>
<span class='ocrx_word' id='word_1_132' title='bbox 912 1133 984 1172; x_wconf 94'>週間</span>
<span class='ocrx_word' id='word_1_133' title='bbox 991 1138 1015 1166; x_wconf 94'>に</span>
<span class='ocrx_word' id='word_1_134' title='bbox 1033 1132 1042 1168; x_wconf 94'>1</span>
<span class='ocrx_word' id='word_1_135' title='bbox 1082 1132 1135 1172; x_wconf 96'>回</span>
<span class='ocrx_word' id='word_1_136' title='bbox 1153 1130 1220 1171; x_wconf 89'>程度</span>
<span class='ocrx_word' id='word_1_137' title='bbox 1240 1130 1317 1171; x_wconf 95'>点検</span>
<span class='ocrx_word' id='word_1_138' title='bbox 1327 1157 1334 1171; x_wconf 93'>し</span>
<span class='ocrx_word' id='word_1_139' title='bbox 1333 1106 1351 1197; x_wconf 75'>,</span>
<span class='ocrx_word' id='word_1_140' title='bbox 1389 1129 1452 1171; x_wconf 75'>液</span>
<span class='ocrx_word' id='word_1_141' title='bbox 1458 1129 1493 1168; x_wconf 91'>面</span>
<span class='ocrx_word' id='word_1_142' title='bbox 1501 1130 1513 1171; x_wconf 88'>が</span>
<span class='ocrx_word' id='word_1_143' title='bbox 1526 1130 1626 1169; x_wconf 95'>低下</span>
<span class='ocrx_word' id='word_1_144' title='bbox 1635 1133 1669 1166; x_wconf 96'>し</span>
<span class='ocrx_word' id='word_1_145' title='bbox 1681 1133 1696 1165; x_wconf 96'>て</span>
<span class='ocrx_word' id='word_1_146' title='bbox 1702 1129 1772 1168; x_wconf 96'>いれ</span>
<span class='ocrx_word' id='word_1_147' title='bbox 1777 1127 1807 1166; x_wconf 90'>ば</span>
<span class='ocrx_word' id='word_1_148' title='bbox 1822 1127 1885 1169; x_wconf 91'>新</span>
<span class='ocrx_word' id='word_1_149' title='bbox 1884 1106 1919 1197; x_wconf 93'>油</span>
<span class='ocrx_word' id='word_1_150' title='bbox 1918 1127 1936 1168; x_wconf 96'>を</span>
<span class='ocrx_word' id='word_1_151' title='bbox 1947 1127 2056 1168; x_wconf 96'>補給</span>
<span class='ocrx_word' id='word_1_152' title='bbox 2055 1106 2079 1197; x_wconf 97'>し</span>
<span class='ocrx_word' id='word_1_153' title='bbox 2078 1132 2112 1165; x_wconf 96'>て</span>
</span>
<span class='ocr_line' id='line_1_8' title="bbox 492 1210 637 1249; baseline 0 0; x_size 83.375; x_descenders 22.25; x_ascenders 20.375">
<span class='ocrx_word' id='word_1_154' title='bbox 492 1210 637 1249; x_wconf 92'>下さ</span>
<span class='ocrx_word' id='word_1_155' title='bbox 578 1184 614 1275; x_wconf 92'>い</span>
<span class='ocrx_word' id='word_1_156' title='bbox 613 1184 642 1275; x_wconf 93'>。</span>
</span>
<span class='ocr_line' id='line_1_9' title="bbox 394 1354 1971 1400; baseline -0.006 0; x_size 83.375; x_descenders 22.25; x_ascenders 20.375">
<span class='ocrx_word' id='word_1_157' title='bbox 394 1360 441 1400; x_wconf 58'>(④①</span>
<span class='ocrx_word' id='word_1_158' title='bbox 505 1360 570 1399; x_wconf 69'>油</span>
<span class='ocrx_word' id='word_1_159' title='bbox 560 1332 621 1423; x_wconf 88'>タン</span>
<span class='ocrx_word' id='word_1_160' title='bbox 628 1360 658 1399; x_wconf 92'>ク</span>
<span class='ocrx_word' id='word_1_161' title='bbox 674 1360 706 1399; x_wconf 87'>内</span>
<span class='ocrx_word' id='word_1_162' title='bbox 719 1360 768 1397; x_wconf 93'>の</span>
<span class='ocrx_word' id='word_1_163' title='bbox 771 1358 808 1397; x_wconf 19'>油</span>
<span class='ocrx_word' id='word_1_164' title='bbox 811 1358 834 1396; x_wconf 92'>は</span>
<span class='ocrx_word' id='word_1_165' title='bbox 843 1385 850 1399; x_wconf 91'>,</span>
<span class='ocrx_word' id='word_1_166' title='bbox 901 1332 993 1423; x_wconf 96'>使用</span>
<span class='ocrx_word' id='word_1_167' title='bbox 992 1357 1104 1397; x_wconf 96'>条件</span>
<span class='ocrx_word' id='word_1_168' title='bbox 1113 1358 1136 1396; x_wconf 97'>に</span>
<span class='ocrx_word' id='word_1_169' title='bbox 1135 1332 1185 1423; x_wconf 96'>より</span>
<span class='ocrx_word' id='word_1_170' title='bbox 1214 1355 1318 1397; x_wconf 79'>劣化</span>
<span class='ocrx_word' id='word_1_171' title='bbox 1332 1355 1352 1394; x_wconf 93'>度</span>
<span class='ocrx_word' id='word_1_172' title='bbox 1351 1332 1380 1423; x_wconf 82'>も</span>
<span class='ocrx_word' id='word_1_173' title='bbox 1379 1355 1495 1396; x_wconf 94'>相違</span>
<span class='ocrx_word' id='word_1_174' title='bbox 1504 1355 1534 1394; x_wconf 96'>し</span>
<span class='ocrx_word' id='word_1_175' title='bbox 1546 1332 1602 1423; x_wconf 96'>ます</span>
<span class='ocrx_word' id='word_1_176' title='bbox 1601 1358 1629 1393; x_wconf 96'>の</span>
<span class='ocrx_word' id='word_1_177' title='bbox 1636 1358 1664 1393; x_wconf 92'>で</span>
<span class='ocrx_word' id='word_1_178' title='bbox 1678 1381 1686 1396; x_wconf 92'>,</span>
<span class='ocrx_word' id='word_1_179' title='bbox 1723 1354 1733 1390; x_wconf 88'>1</span>
<span class='ocrx_word' id='word_1_180' title='bbox 1756 1354 1971 1394; x_wconf 88'>年</span>
<span class='ocrx_word' id='word_1_181' title='bbox 1834 1332 1875 1423; x_wconf 92'>毎</span>
<span class='ocrx_word' id='word_1_182' title='bbox 1874 1332 1909 1423; x_wconf 92'>に</span>
<span class='ocrx_word' id='word_1_183' title='bbox 1908 1332 1943 1423; x_wconf 92'>油</span>
<span class='ocrx_word' id='word_1_184' title='bbox 1942 1332 1972 1423; x_wconf 95'>の</span>
</span>
<span class='ocr_line' id='line_1_10' title="bbox 493 1429 2070 1474; baseline -0.008 0; x_size 83.375; x_descenders 22.25; x_ascenders 20.375">
<span class='ocrx_word' id='word_1_185' title='bbox 493 1436 577 1474; x_wconf 96'>サン</span>
<span class='ocrx_word' id='word_1_186' title='bbox 586 1432 666 1472; x_wconf 94'>プル</span>
<span class='ocrx_word' id='word_1_187' title='bbox 673 1433 706 1474; x_wconf 97'>を</span>
<span class='ocrx_word' id='word_1_188' title='bbox 719 1436 792 1474; x_wconf 96'>取っ</span>
<span class='ocrx_word' id='word_1_189' title='bbox 801 1435 855 1472; x_wconf 93'>て</span>
<span class='ocrx_word' id='word_1_190' title='bbox 857 1433 882 1472; x_wconf 92'>油</span>
<span class='ocrx_word' id='word_1_191' title='bbox 903 1436 925 1471; x_wconf 96'>の</span>
<span class='ocrx_word' id='word_1_192' title='bbox 943 1432 1001 1474; x_wconf 92'>性</span>
<span class='ocrx_word' id='word_1_193' title='bbox 1000 1406 1041 1498; x_wconf 93'>状</span>
<span class='ocrx_word' id='word_1_194' title='bbox 1041 1432 1059 1472; x_wconf 96'>を</span>
<span class='ocrx_word' id='word_1_195' title='bbox 1081 1433 1149 1472; x_wconf 95'>調べ</span>
<span class='ocrx_word' id='word_1_196' title='bbox 1162 1430 1300 1472; x_wconf 89'>(潤滑</span>
<span class='ocrx_word' id='word_1_197' title='bbox 1309 1433 1336 1466; x_wconf 90'>油</span>
<span class='ocrx_word' id='word_1_198' title='bbox 1350 1448 1375 1453; x_wconf 93'>メ</span>
<span class='ocrx_word' id='word_1_199' title='bbox 1374 1406 1409 1498; x_wconf 93'>ー</span>
<span class='ocrx_word' id='word_1_200' title='bbox 1409 1432 1426 1468; x_wconf 93'>カ</span>
<span class='ocrx_word' id='word_1_201' title='bbox 1443 1447 1473 1453; x_wconf 91'>ー</span>
<span class='ocrx_word' id='word_1_202' title='bbox 1483 1433 1519 1468; x_wconf 92'>に</span>
<span class='ocrx_word' id='word_1_203' title='bbox 1524 1429 1623 1471; x_wconf 92'>依頼</span>
<span class='ocrx_word' id='word_1_204' title='bbox 1639 1435 1662 1465; x_wconf 93'>)</span>
<span class='ocrx_word' id='word_1_205' title='bbox 1679 1406 1716 1498; x_wconf 97'>この</span>
<span class='ocrx_word' id='word_1_206' title='bbox 1742 1429 1846 1469; x_wconf 96'>結果</span>
<span class='ocrx_word' id='word_1_207' title='bbox 1846 1406 1875 1498; x_wconf 96'>に</span>
<span class='ocrx_word' id='word_1_208' title='bbox 1874 1430 1932 1468; x_wconf 96'>より</span>
<span class='ocrx_word' id='word_1_209' title='bbox 1949 1429 2028 1469; x_wconf 96'>必要</span>
<span class='ocrx_word' id='word_1_210' title='bbox 2035 1430 2070 1466; x_wconf 96'>に</span>
</span>
<span class='ocr_line' id='line_1_11' title="bbox 23 1490 990 1582; baseline -0.008 -26.967; x_size 83.375; x_descenders 22.25; x_ascenders 20.375">
<span class='ocrx_word' id='word_1_211' title='bbox 23 1490 76 1582; x_wconf 42'>wo</span>
<span class='ocrx_word' id='word_1_212' title='bbox 493 1484 599 1576; x_wconf 96'>応じ</span>
<span class='ocrx_word' id='word_1_213' title='bbox 598 1513 619 1547; x_wconf 96'>て</span>
<span class='ocrx_word' id='word_1_214' title='bbox 638 1508 737 1549; x_wconf 96'>取り</span>
<span class='ocrx_word' id='word_1_215' title='bbox 760 1484 817 1576; x_wconf 94'>替え</span>
<span class='ocrx_word' id='word_1_216' title='bbox 816 1513 837 1546; x_wconf 95'>て</span>
<span class='ocrx_word' id='word_1_217' title='bbox 862 1484 932 1576; x_wconf 93'>下さ</span>
<span class='ocrx_word' id='word_1_218' title='bbox 934 1511 952 1544; x_wconf 92'>い</span>
<span class='ocrx_word' id='word_1_219' title='bbox 960 1514 990 1547; x_wconf 93'>。</span>
</span>
<span class='ocr_line' id='line_1_12' title="bbox 25 1565 102 1594; baseline 0 -6; x_size 31.372189; x_descenders 8.3721886; x_ascenders 7.666667">
<span class='ocrx_word' id='word_1_220' title='bbox 25 1565 102 1594; x_wconf 22'>いき</span>
<span class='ocrx_word' id='word_1_221' title='bbox 63 1561 76 1601; x_wconf 35'>ほ</span>
</span>
<span class='ocr_line' id='line_1_13' title="bbox 30 1606 78 1634; baseline 0 0; x_size 38.19223; x_descenders 10.192229; x_ascenders 9.333334">
<span class='ocrx_word' id='word_1_222' title='bbox 30 1606 78 1634; x_wconf 77'>[も</span>
<span class='ocrx_word' id='word_1_223' title='bbox 55 1602 71 1649; x_wconf 20'>る</span>
<span class='ocrx_word' id='word_1_224' title='bbox 70 1602 82 1649; x_wconf 56'>]</span>
</span>
<span class='ocr_line' id='line_1_14' title="bbox 30 1652 2016 1723; baseline -0.006 -21; x_size 83.375; x_descenders 22.25; x_ascenders 20.375">
<span class='ocrx_word' id='word_1_225' title='bbox 30 1652 82 1723; x_wconf 35'>の</span>
<span class='ocrx_word' id='word_1_226' title='bbox 396 1660 442 1700; x_wconf 74'>(5)</span>
<span class='ocrx_word' id='word_1_227' title='bbox 500 1660 532 1699; x_wconf 51'>油</span>
<span class='ocrx_word' id='word_1_228' title='bbox 556 1658 654 1699; x_wconf 93'>濾過</span>
<span class='ocrx_word' id='word_1_229' title='bbox 672 1661 705 1696; x_wconf 64'>器</span>
<span class='ocrx_word' id='word_1_230' title='bbox 717 1660 734 1697; x_wconf 93'>に</span>
<span class='ocrx_word' id='word_1_231' title='bbox 733 1630 793 1721; x_wconf 96'>よる</span>
<span class='ocrx_word' id='word_1_232' title='bbox 807 1657 904 1699; x_wconf 94'>圧損</span>
<span class='ocrx_word' id='word_1_233' title='bbox 915 1657 927 1685; x_wconf 93'>が</span>
<span class='ocrx_word' id='word_1_234' title='bbox 931 1684 940 1699; x_wconf 91'>,</span>
<span class='ocrx_word' id='word_1_235' title='bbox 994 1655 1098 1697; x_wconf 96'>初期</span>
<span class='ocrx_word' id='word_1_236' title='bbox 1108 1666 1129 1687; x_wconf 83'>値</span>
<span class='ocrx_word' id='word_1_237' title='bbox 1131 1652 1597 1697; x_wconf 28'>t0.5kg/cm</span>
<span class='ocrx_word' id='word_1_238' title='bbox 1364 1630 1450 1721; x_wconf 96'>以上</span>
<span class='ocrx_word' id='word_1_239' title='bbox 1449 1630 1484 1721; x_wconf 96'>に</span>
<span class='ocrx_word' id='word_1_240' title='bbox 1483 1630 1519 1721; x_wconf 93'>な</span>
<span class='ocrx_word' id='word_1_241' title='bbox 1518 1630 1553 1721; x_wconf 93'>れ</span>
<span class='ocrx_word' id='word_1_242' title='bbox 1552 1630 1587 1721; x_wconf 60'>ば</span>
<span class='ocrx_word' id='word_1_243' title='bbox 1586 1630 1610 1721; x_wconf 88'>,</span>
<span class='ocrx_word' id='word_1_244' title='bbox 1633 1652 1980 1694; x_wconf 33'>濾材</span>
<span class='ocrx_word' id='word_1_245' title='bbox 1756 1630 1786 1721; x_wconf 96'>を</span>
<span class='ocrx_word' id='word_1_246' title='bbox 1785 1652 1877 1694; x_wconf 93'>取り</span>
<span class='ocrx_word' id='word_1_247' title='bbox 1876 1630 1928 1721; x_wconf 77'>舞</span>
<span class='ocrx_word' id='word_1_248' title='bbox 1927 1630 1962 1721; x_wconf 93'>え</span>
<span class='ocrx_word' id='word_1_249' title='bbox 1961 1630 1985 1721; x_wconf 46'>て</span>
</span>
<span class='ocr_line' id='line_1_15' title="bbox 33 1712 640 1803; baseline -0.003 -27; x_size 83.375; x_descenders 22.25; x_ascenders 20.375">
<span class='ocrx_word' id='word_1_250' title='bbox 33 1712 81 1803; x_wconf 39'>Go</span>
<span class='ocrx_word' id='word_1_251' title='bbox 495 1735 640 1774; x_wconf 91'>下さ</span>
<span class='ocrx_word' id='word_1_252' title='bbox 581 1709 611 1800; x_wconf 92'>い</span>
<span class='ocrx_word' id='word_1_253' title='bbox 610 1709 645 1800; x_wconf 92'>。</span>
</span>
<span class='ocr_line' id='line_1_16' title="bbox 37 1787 81 1832; baseline 0 0; x_size 61.380371; x_descenders 16.380369; x_ascenders 15">
<span class='ocrx_word' id='word_1_254' title='bbox 37 1787 81 1832; x_wconf 3'>党</span>
</span>
<span class='ocr_line' id='line_1_17' title="bbox 396 1877 1983 1924; baseline -0.004 0; x_size 83.375; x_descenders 22.25; x_ascenders 20.375">
<span class='ocrx_word' id='word_1_255' title='bbox 396 1885 442 1924; x_wconf 88'>(6)</span>
<span class='ocrx_word' id='word_1_256' title='bbox 498 1883 592 1922; x_wconf 88'>ガス</span>
<span class='ocrx_word' id='word_1_257' title='bbox 591 1883 694 1924; x_wconf 39'>冷却</span>
<span class='ocrx_word' id='word_1_258' title='bbox 714 1910 721 1924; x_wconf 82'>器</span>
<span class='ocrx_word' id='word_1_259' title='bbox 721 1856 745 1947; x_wconf 89'>,</span>
<span class='ocrx_word' id='word_1_260' title='bbox 778 1882 825 1922; x_wconf 84'>油</span>
<span class='ocrx_word' id='word_1_261' title='bbox 844 1882 916 1922; x_wconf 90'>冷却</span>
<span class='ocrx_word' id='word_1_262' title='bbox 934 1886 956 1919; x_wconf 70'>器</span>
<span class='ocrx_word' id='word_1_263' title='bbox 979 1886 988 1919; x_wconf 97'>の</span>
<span class='ocrx_word' id='word_1_264' title='bbox 994 1880 1098 1922; x_wconf 94'>冷却</span>
<span class='ocrx_word' id='word_1_265' title='bbox 1114 1882 1183 1921; x_wconf 77'>管内</span>
<span class='ocrx_word' id='word_1_266' title='bbox 1182 1856 1200 1947; x_wconf 92'>に</span>
<span class='ocrx_word' id='word_1_267' title='bbox 1200 1907 1207 1922; x_wconf 92'>,</span>
<span class='ocrx_word' id='word_1_268' title='bbox 1262 1880 1365 1921; x_wconf 94'>冷却</span>
<span class='ocrx_word' id='word_1_269' title='bbox 1374 1885 1410 1918; x_wconf 61'>水</span>
<span class='ocrx_word' id='word_1_270' title='bbox 1416 1880 1450 1919; x_wconf 92'>の</span>
<span class='ocrx_word' id='word_1_271' title='bbox 1461 1883 1498 1919; x_wconf 93'>水</span>
<span class='ocrx_word' id='word_1_272' title='bbox 1507 1856 1558 1947; x_wconf 96'>アカ</span>
<span class='ocrx_word' id='word_1_273' title='bbox 1557 1879 1588 1916; x_wconf 96'>が</span>
<span class='ocrx_word' id='word_1_274' title='bbox 1597 1877 1706 1919; x_wconf 95'>付着</span>
<span class='ocrx_word' id='word_1_275' title='bbox 1705 1856 1729 1947; x_wconf 96'>し</span>
<span class='ocrx_word' id='word_1_276' title='bbox 1728 1882 1777 1916; x_wconf 97'>て</span>
<span class='ocrx_word' id='word_1_277' title='bbox 1779 1877 1888 1918; x_wconf 71'>冷却</span>
<span class='ocrx_word' id='word_1_278' title='bbox 1905 1877 1968 1918; x_wconf 68'>能力</span>
<span class='ocrx_word' id='word_1_279' title='bbox 1967 1856 1985 1947; x_wconf 96'>を</span>
</span>
<span class='ocr_line' id='line_1_18' title="bbox 495 1952 2335 2000; baseline -0.005 0; x_size 83.375; x_descenders 22.25; x_ascenders 20.375">
<span class='ocrx_word' id='word_1_280' title='bbox 495 1958 618 2000; x_wconf 95'>低下</span>
<span class='ocrx_word' id='word_1_281' title='bbox 627 1958 696 1997; x_wconf 96'>させ</span>
<span class='ocrx_word' id='word_1_282' title='bbox 720 1963 736 1994; x_wconf 96'>る</span>
<span class='ocrx_word' id='word_1_283' title='bbox 735 1931 816 2022; x_wconf 96'>こと</span>
<span class='ocrx_word' id='word_1_284' title='bbox 828 1957 843 1985; x_wconf 96'>が</span>
<span class='ocrx_word' id='word_1_285' title='bbox 854 1957 921 1997; x_wconf 96'>あり</span>
<span class='ocrx_word' id='word_1_286' title='bbox 940 1957 1018 1997; x_wconf 96'>ます</span>
<span class='ocrx_word' id='word_1_287' title='bbox 1024 1961 1060 1994; x_wconf 96'>の</span>
<span class='ocrx_word' id='word_1_288' title='bbox 1069 1961 1100 1994; x_wconf 93'>で</span>
<span class='ocrx_word' id='word_1_289' title='bbox 1111 1984 1119 1997; x_wconf 92'>,</span>
<span class='ocrx_word' id='word_1_290' title='bbox 1173 1955 1237 1996; x_wconf 93'>使用</span>
<span class='ocrx_word' id='word_1_291' title='bbox 1258 1955 1368 1996; x_wconf 96'>条件</span>
<span class='ocrx_word' id='word_1_292' title='bbox 1375 1955 1401 1993; x_wconf 96'>に</span>
<span class='ocrx_word' id='word_1_293' title='bbox 1400 1931 1447 2022; x_wconf 93'>より</span>
<span class='ocrx_word' id='word_1_294' title='bbox 1474 1954 1500 1994; x_wconf 84'>適</span>
<span class='ocrx_word' id='word_1_295' title='bbox 1514 1954 1543 1994; x_wconf 0'>宮</span>
<span class='ocrx_word' id='word_1_296' title='bbox 1565 1931 1652 2022; x_wconf 4'>管内</span>
<span class='ocrx_word' id='word_1_297' title='bbox 1651 1958 1674 1991; x_wconf 96'>の</span>
<span class='ocrx_word' id='word_1_298' title='bbox 1691 1952 1794 1994; x_wconf 92'>掃除</span>
<span class='ocrx_word' id='word_1_299' title='bbox 1813 1954 1851 1994; x_wconf 96'>を</span>
<span class='ocrx_word' id='word_1_300' title='bbox 1863 1957 1936 1990; x_wconf 96'>行っ</span>
<span class='ocrx_word' id='word_1_301' title='bbox 1945 1957 1976 1991; x_wconf 96'>て</span>
<span class='ocrx_word' id='word_1_302' title='bbox 1995 1931 2038 2022; x_wconf 93'>下さ</span>
<span class='ocrx_word' id='word_1_303' title='bbox 2037 1957 2053 1988; x_wconf 93'>い</span>
<span class='ocrx_word' id='word_1_304' title='bbox 2060 1958 2091 1991; x_wconf 93'>。</span>
</span>
<span class='ocr_line' id='line_1_19' title="bbox 397 2102 2118 2150; baseline -0.005 0; x_size 83.375; x_descenders 22.25; x_ascenders 20.375">
<span class='ocrx_word' id='word_1_305' title='bbox 397 2110 444 2150; x_wconf 84'>(7)</span>
<span class='ocrx_word' id='word_1_306' title='bbox 496 2111 535 2149; x_wconf 0'>正</span>
<span class='ocrx_word' id='word_1_307' title='bbox 557 2108 610 2150; x_wconf 92'>縮</span>
<span class='ocrx_word' id='word_1_308' title='bbox 627 2108 808 2149; x_wconf 91'>機運</span>
<span class='ocrx_word' id='word_1_309' title='bbox 700 2082 752 2173; x_wconf 90'>転</span>
<span class='ocrx_word' id='word_1_310' title='bbox 751 2082 780 2173; x_wconf 84'>中</span>
<span class='ocrx_word' id='word_1_311' title='bbox 779 2082 803 2173; x_wconf 93'>は</span>
<span class='ocrx_word' id='word_1_312' title='bbox 802 2082 826 2173; x_wconf 88'>,</span>
<span class='ocrx_word' id='word_1_313' title='bbox 853 2107 885 2147; x_wconf 88'>各</span>
<span class='ocrx_word' id='word_1_314' title='bbox 899 2107 962 2147; x_wconf 92'>配</span>
<span class='ocrx_word' id='word_1_315' title='bbox 979 2107 1002 2147; x_wconf 85'>管</span>
<span class='ocrx_word' id='word_1_316' title='bbox 1023 2105 1048 2147; x_wconf 88'>系</span>
<span class='ocrx_word' id='word_1_317' title='bbox 1047 2082 1087 2173; x_wconf 91'>統</span>
<span class='ocrx_word' id='word_1_318' title='bbox 1086 2105 1139 2146; x_wconf 93'>の</span>
<span class='ocrx_word' id='word_1_319' title='bbox 1156 2105 1207 2147; x_wconf 93'>洩れ</span>
<span class='ocrx_word' id='word_1_320' title='bbox 1206 2082 1224 2173; x_wconf 92'>,</span>
<span class='ocrx_word' id='word_1_321' title='bbox 1243 2104 1644 2147; x_wconf 86'>振動</span>
<span class='ocrx_word' id='word_1_322' title='bbox 1365 2082 1400 2173; x_wconf 95'>等</span>
<span class='ocrx_word' id='word_1_323' title='bbox 1399 2082 1434 2173; x_wconf 94'>に</span>
<span class='ocrx_word' id='word_1_324' title='bbox 1433 2082 1531 2173; x_wconf 84'>充分</span>
<span class='ocrx_word' id='word_1_325' title='bbox 1530 2104 1633 2147; x_wconf 95'>注意</span>
<span class='ocrx_word' id='word_1_326' title='bbox 1632 2082 1662 2173; x_wconf 93'>し</span>
<span class='ocrx_word' id='word_1_327' title='bbox 1661 2082 1690 2173; x_wconf 92'>,</span>
<span class='ocrx_word' id='word_1_328' title='bbox 1723 2107 1798 2143; x_wconf 96'>フラ</span>
<span class='ocrx_word' id='word_1_329' title='bbox 1797 2082 1854 2173; x_wconf 96'>ンジ</span>
<span class='ocrx_word' id='word_1_330' title='bbox 1866 2102 1941 2141; x_wconf 96'>ネジ</span>
<span class='ocrx_word' id='word_1_331' title='bbox 1962 2082 2049 2173; x_wconf 93'>込み</span>
<span class='ocrx_word' id='word_1_332' title='bbox 2048 2102 2118 2143; x_wconf 86'>継手</span>
</span>
<span class='ocr_line' id='line_1_20' title="bbox 496 2182 1125 2225; baseline -0.006 0; x_size 83.375; x_descenders 22.25; x_ascenders 20.375">
<span class='ocrx_word' id='word_1_333' title='bbox 496 2185 567 2225; x_wconf 96'>等</span>
<span class='ocrx_word' id='word_1_334' title='bbox 583 2183 607 2224; x_wconf 93'>の</span>
<span class='ocrx_word' id='word_1_335' title='bbox 627 2183 653 2225; x_wconf 91'>増</span>
<span class='ocrx_word' id='word_1_336' title='bbox 672 2183 699 2224; x_wconf 67'>納</span>
<span class='ocrx_word' id='word_1_337' title='bbox 718 2183 745 2224; x_wconf 86'>等</span>
<span class='ocrx_word' id='word_1_338' title='bbox 759 2182 786 2222; x_wconf 96'>を</span>
<span class='ocrx_word' id='word_1_339' title='bbox 802 2182 886 2224; x_wconf 74'>適宜</span>
<span class='ocrx_word' id='word_1_340' title='bbox 894 2186 964 2221; x_wconf 96'>行っ</span>
<span class='ocrx_word' id='word_1_341' title='bbox 979 2186 1004 2222; x_wconf 94'>て</span>
<span class='ocrx_word' id='word_1_342' title='bbox 1003 2157 1059 2249; x_wconf 93'>下さ</span>
<span class='ocrx_word' id='word_1_343' title='bbox 1072 2186 1087 2218; x_wconf 93'>い</span>
<span class='ocrx_word' id='word_1_344' title='bbox 1095 2188 1125 2221; x_wconf 93'>。</span>
</span>
<span class='ocr_line' id='line_1_21' title="bbox 229 2329 1920 2375; baseline -0.005 1; x_size 83.375; x_descenders 22.25; x_ascenders 20.375">
<span class='ocrx_word' id='word_1_345' title='bbox 229 2348 231 2350; x_wconf 0'>ヘ</span>
<span class='ocrx_word' id='word_1_346' title='bbox 397 2335 466 2375; x_wconf 62'>(8)</span>
<span class='ocrx_word' id='word_1_347' title='bbox 506 2333 598 2374; x_wconf 95'>ガス</span>
<span class='ocrx_word' id='word_1_348' title='bbox 598 2335 714 2375; x_wconf 77'>冷却</span>
<span class='ocrx_word' id='word_1_349' title='bbox 721 2338 757 2372; x_wconf 81'>器</span>
<span class='ocrx_word' id='word_1_350' title='bbox 777 2333 795 2372; x_wconf 93'>の</span>
<span class='ocrx_word' id='word_1_351' title='bbox 794 2307 844 2399; x_wconf 93'>ドレ</span>
<span class='ocrx_word' id='word_1_352' title='bbox 863 2339 888 2371; x_wconf 85'>ン</span>
<span class='ocrx_word' id='word_1_353' title='bbox 897 2332 956 2374; x_wconf 87'>が</span>
<span class='ocrx_word' id='word_1_354' title='bbox 964 2332 1063 2372; x_wconf 91'>排出</span>
<span class='ocrx_word' id='word_1_355' title='bbox 1076 2332 1140 2372; x_wconf 96'>され</span>
<span class='ocrx_word' id='word_1_356' title='bbox 1164 2336 1180 2369; x_wconf 90'>て</span>
<span class='ocrx_word' id='word_1_357' title='bbox 1186 2332 1240 2371; x_wconf 96'>いる</span>
<span class='ocrx_word' id='word_1_358' title='bbox 1249 2332 1283 2369; x_wconf 93'>か</span>
<span class='ocrx_word' id='word_1_359' title='bbox 1291 2360 1303 2371; x_wconf 93'>、</span>
<span class='ocrx_word' id='word_1_360' title='bbox 1341 2330 1398 2371; x_wconf 86'>日</span>
<span class='ocrx_word' id='word_1_361' title='bbox 1423 2330 1444 2371; x_wconf 92'>常</span>
<span class='ocrx_word' id='word_1_362' title='bbox 1465 2330 1548 2371; x_wconf 96'>点検</span>
<span class='ocrx_word' id='word_1_363' title='bbox 1564 2330 1588 2369; x_wconf 96'>に</span>
<span class='ocrx_word' id='word_1_364' title='bbox 1600 2333 1617 2366; x_wconf 97'>お</span>
<span class='ocrx_word' id='word_1_365' title='bbox 1623 2333 1678 2368; x_wconf 96'>いて</span>
<span class='ocrx_word' id='word_1_366' title='bbox 1697 2329 1807 2369; x_wconf 96'>確認</span>
<span class='ocrx_word' id='word_1_367' title='bbox 1824 2307 1870 2399; x_wconf 93'>下さ</span>
<span class='ocrx_word' id='word_1_368' title='bbox 1869 2332 1884 2365; x_wconf 93'>い</span>
<span class='ocrx_word' id='word_1_369' title='bbox 1892 2335 1920 2368; x_wconf 93'>。</span>
</span>
<span class='ocr_line' id='line_1_22' title="bbox 390 2477 697 2527; baseline 0.01 -6; x_size 62.744377; x_descenders 16.744377; x_ascenders 15.333334">
<span class='ocrx_word' id='word_1_370' title='bbox 390 2482 424 2522; x_wconf 92'>2.</span>
<span class='ocrx_word' id='word_1_371' title='bbox 497 2477 622 2527; x_wconf 86'>定期</span>
<span class='ocrx_word' id='word_1_372' title='bbox 621 2473 697 2547; x_wconf 96'>修理</span>
</span>
<span class='ocr_line' id='line_1_23' title="bbox 496 2555 2049 2603; baseline -0.006 0; x_size 83.375; x_descenders 22.25; x_ascenders 20.375">
<span class='ocrx_word' id='word_1_373' title='bbox 496 2561 607 2603; x_wconf 96'>定期</span>
<span class='ocrx_word' id='word_1_374' title='bbox 628 2561 694 2602; x_wconf 95'>修理</span>
<span class='ocrx_word' id='word_1_375' title='bbox 693 2530 734 2622; x_wconf 96'>を</span>
<span class='ocrx_word' id='word_1_376' title='bbox 733 2560 840 2602; x_wconf 96'>施行</span>
<span class='ocrx_word' id='word_1_377' title='bbox 848 2530 912 2622; x_wconf 96'>する</span>
<span class='ocrx_word' id='word_1_378' title='bbox 934 2560 1016 2599; x_wconf 96'>場合</span>
<span class='ocrx_word' id='word_1_379' title='bbox 1024 2587 1032 2602; x_wconf 93'>は</span>
<span class='ocrx_word' id='word_1_380' title='bbox 1032 2530 1056 2622; x_wconf 83'>,</span>
<span class='ocrx_word' id='word_1_381' title='bbox 1107 2558 1152 2600; x_wconf 83'>後</span>
<span class='ocrx_word' id='word_1_382' title='bbox 1164 2576 1194 2582; x_wconf 93'>ペ</span>
<span class='ocrx_word' id='word_1_383' title='bbox 1193 2530 1217 2622; x_wconf 93'>ー</span>
<span class='ocrx_word' id='word_1_384' title='bbox 1216 2558 1240 2597; x_wconf 93'>ジ</span>
<span class='ocrx_word' id='word_1_385' title='bbox 1248 2560 1299 2599; x_wconf 96'>に</span>
<span class='ocrx_word' id='word_1_386' title='bbox 1302 2558 1401 2599; x_wconf 67'>添付</span>
<span class='ocrx_word' id='word_1_387' title='bbox 1400 2530 1418 2622; x_wconf 93'>の</span>
<span class='ocrx_word' id='word_1_388' title='bbox 1423 2557 1435 2590; x_wconf 60'>「</span>
<span class='ocrx_word' id='word_1_389' title='bbox 1452 2557 1504 2599; x_wconf 0'>定</span>
<span class='ocrx_word' id='word_1_390' title='bbox 1504 2530 1545 2622; x_wconf 93'>期</span>
<span class='ocrx_word' id='word_1_391' title='bbox 1544 2555 1612 2597; x_wconf 93'>修理</span>
<span class='ocrx_word' id='word_1_392' title='bbox 1630 2555 1740 2597; x_wconf 85'>要領</span>
<span class='ocrx_word' id='word_1_393' title='bbox 1747 2563 1759 2596; x_wconf 68'>書</span>
<span class='ocrx_word' id='word_1_394' title='bbox 1768 2530 1786 2622; x_wconf 37'>」</span>
<span class='ocrx_word' id='word_1_395' title='bbox 1797 2555 1809 2596; x_wconf 70'>を</span>
<span class='ocrx_word' id='word_1_396' title='bbox 1815 2555 2049 2596; x_wconf 93'>参照</span>
<span class='ocrx_word' id='word_1_397' title='bbox 1952 2530 1999 2622; x_wconf 93'>下さ</span>
<span class='ocrx_word' id='word_1_398' title='bbox 1998 2530 2022 2622; x_wconf 92'>い</span>
<span class='ocrx_word' id='word_1_399' title='bbox 2021 2530 2051 2622; x_wconf 93'>。</span>
</span>
<span class='ocr_line' id='line_1_24' title="bbox 99 3377 2191 3460; baseline -0.006 -36; x_size 45.012268; x_descenders 12.01227; x_ascenders 11">
<span class='ocrx_word' id='word_1_400' title='bbox 99 3409 186 3460; x_wconf 10'>2</span>
<span class='ocrx_word' id='word_1_401' title='bbox 1537 3377 1617 3424; x_wconf 35'>&lt;</span>
<span class='ocrx_word' id='word_1_402' title='bbox 1673 3382 1718 3416; x_wconf 6'>の</span>
<span class='ocrx_word' id='word_1_403' title='bbox 1717 3373 1740 3432; x_wconf 25'>O</span>
<span class='ocrx_word' id='word_1_404' title='bbox 1728 3382 1818 3416; x_wconf 0'>放</span>
<span class='ocrx_word' id='word_1_405' title='bbox 1787 3373 1832 3432; x_wconf 0'>己</span>
<span class='ocrx_word' id='word_1_406' title='bbox 1857 3380 1947 3415; x_wconf 20'>全て</span>
<span class='ocrx_word' id='word_1_407' title='bbox 1956 3380 2050 3421; x_wconf 0'>記し</span>
<span class='ocrx_word' id='word_1_408' title='bbox 2062 3380 2191 3413; x_wconf 88'>LT</span>
<span class='ocrx_word' id='word_1_409' title='bbox 2130 3373 2160 3432; x_wconf 5'>上</span>
<span class='ocrx_word' id='word_1_410' title='bbox 2178 3373 2194 3432; x_wconf 5'>.</span>
</span>
`;

// Parse the HTML content using JSDOM
const dom = new JSDOM(htmlContent);
const document = dom.window.document;

// Query all the elements with class 'ocr_line'
const lines = document.querySelectorAll(".ocr_line");

// Initialize an array to hold sentences
const sentences = Array.from(lines).map((line) => {
  // For each 'ocr_line', query its child elements with class 'ocrx_word'
  // Join their text content to form a sentence
  return Array.from(line.querySelectorAll(".ocrx_word"))
    .map((word) => word.textContent)
    .join(" ");
});

console.log(sentences);
