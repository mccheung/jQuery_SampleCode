
// 查找指定ID 的Table中所有行中
// 指定列如果原来的值等于指定值
// 则替换为 replace 值
// 如果 index 没有指定, 则默认
// 查找第 1 列
function find_and_modify_table_value( tableID, value, replace, index ) {
  var table = tableID; //$("#invoice_table tr:gt(0)") Can skip the header row
  var total_find = 0;

  if ( typeof index === 'undefined' ) {
    index = 0;
  }

  $( table ).each( function( index ) {
    var new_value = $(this).find("td").eq( index ).html();
    if ( new_value == value ) {
      total_find += 1;
      $(this).find("td").eq( index ).html( replace );
    }
  });
  return total_find;
}
