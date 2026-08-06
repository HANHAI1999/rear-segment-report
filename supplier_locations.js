// 仓库/覆盖坐标映射
const WAREHOUSES = {
  '长年长富': [{lat:41.88,lon:-87.63,label:'芝加哥仓'},{lat:40.71,lon:-74.01,label:'纽约仓'}],
  'DRAYEASY': [{lat:40.71,lon:-74.01,label:'全美平台(无自有仓)'}],
  'MKK': [{lat:34.05,lon:-118.24,label:'洛杉矶'}],
  'NEW WORLD': [{lat:33.77,lon:-118.22,label:'LA/LB'}],
  'LA盈仓': [{lat:34.05,lon:-118.24,label:'洛杉矶仓'}],
  'NJ盈仓': [{lat:40.74,lon:-74.17,label:'纽瓦克仓'}],
  'SAV盈仓': [{lat:32.08,lon:-81.10,label:'萨凡纳仓'}],
  'DAL盈仓': [{lat:32.78,lon:-96.80,label:'达拉斯仓'}],
  'SYCO': [{lat:34.05,lon:-118.24,label:'洛杉矶(UPS)'}],
  'KENBO': [{lat:33.77,lon:-118.22,label:'LA/LB'}],
  'SMART': [{lat:29.76,lon:-95.37,label:'休斯顿仓'},{lat:34.05,lon:-118.24,label:'LA'},{lat:41.88,lon:-87.63,label:'芝加哥'}],
  '美雄': [{lat:41.88,lon:-87.63,label:'芝加哥仓'}],
  '17Shippings': [{lat:47.61,lon:-122.34,label:'西雅图'},{lat:37.80,lon:-122.27,label:'奥克兰'}],
  'RAMBO（BOLAN）': [{lat:37.80,lon:-122.27,label:'奥克兰'},{lat:47.61,lon:-122.34,label:'西雅图'}],
  'AMG（YSP）': [{lat:37.80,lon:-122.27,label:'奥克兰'}],
  'MAX': [{lat:40.71,lon:-74.01,label:'纽约'}],
  'UTC': [{lat:40.71,lon:-74.01,label:'纽约'},{lat:32.08,lon:-81.10,label:'萨凡纳'},{lat:29.76,lon:-95.37,label:'休斯顿'}],
  'SEN MART': [{lat:39.83,lon:-98.58,label:'全美'}],
  'DINGZHAO': [{lat:33.77,lon:-118.22,label:'LA/LB'}],
  'Twenty Transportation': [{lat:33.77,lon:-118.22,label:'LA/LB'}],
  '西部快线': [{lat:33.77,lon:-118.22,label:'LA/LB'}],
  'Rainbow Logistics Inc': [{lat:33.77,lon:-118.22,label:'LA/LB'}],
  '佳邮（加拿大）': [{lat:43.65,lon:-79.38,label:'多伦多'},{lat:49.28,lon:-123.12,label:'温哥华'}],
  '顺丰（英国）': [{lat:51.51,lon:-0.13,label:'伦敦'}],
};

// 供应商考核数据（更新自 report_data.js 原始数据）
// 保留 DATA.results 作为当前数据，仅追加仓库坐标
DATA.warehouses = WAREHOUSES;
