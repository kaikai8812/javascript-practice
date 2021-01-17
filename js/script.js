$('#tab-contents .tab[id != "tab1"]').hide();
// id=tab-contents要素の中の、tagクラスを持つ中で、id == tab1じゃないものを非表示にしている。

$('#tab-menu a').on('click', function(event){
  // クリックされた時に発動する動作。
  $('#tab-contents .tab' ).hide();
  // まず、id=tab-contents中のtabクラスを持つものを全て隠す。
  $('#tab-menu .active').removeClass('active');
  // activeクラスを持つやつを、activeクラスじゃなくする。
  $(this).addClass('active')
  // クリックされた要素に、activeクラスを付与する。
  $($(this).attr("href")).show();
  // attr()で、クリックした対象のデータを回収→それを、showで表示！
  event.preventDefault();
});
