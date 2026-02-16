import { useState, useMemo } from "react";

const C = [
  { n:"NVIDIA", f:1993, c:"#76B900", t:"GPUs / AI Computing", cat:"Computing",
    d:[{y:1995,r:2},{y:1996,r:3},{y:1997,r:13.3},{y:1998,r:158},{y:1999,r:375},{y:2000,r:735},{y:2001,r:1370},{y:2002,r:2010},{y:2003,r:2050},{y:2004,r:2200},{y:2005,r:2376},{y:2006,r:3069},{y:2007,r:4098},{y:2008,r:3425},{y:2009,r:3326},{y:2010,r:3543},{y:2011,r:3998},{y:2012,r:4280},{y:2013,r:4130},{y:2014,r:4682},{y:2015,r:5010},{y:2016,r:6910},{y:2017,r:9714},{y:2018,r:11716},{y:2019,r:10918},{y:2020,r:16675},{y:2021,r:26914},{y:2022,r:26974},{y:2023,r:60922},{y:2024,r:130497}],
    e:[{y:1996,e:42},{y:1997,e:92},{y:1998,e:248},{y:1999,e:392},{y:2000,e:796},{y:2001,e:1123},{y:2002,e:1513},{y:2003,e:1825},{y:2004,e:2101},{y:2005,e:2737},{y:2006,e:4083},{y:2007,e:4985},{y:2008,e:5420},{y:2009,e:5706},{y:2010,e:6029},{y:2011,e:7133},{y:2012,e:7974},{y:2013,e:8808},{y:2014,e:9228},{y:2015,e:9227},{y:2016,e:10299},{y:2017,e:11528},{y:2018,e:13277},{y:2019,e:13775},{y:2020,e:18975},{y:2021,e:22473},{y:2022,e:26196},{y:2023,e:29600},{y:2024,e:36000}]},
  { n:"Tesla", f:2003, c:"#e31937", t:"EV / Energy / AI", cat:"Automotive",
    d:[{y:2008,r:14.7},{y:2009,r:111.9},{y:2010,r:116.7},{y:2011,r:204.2},{y:2012,r:413.3},{y:2013,r:2013},{y:2014,r:3198},{y:2015,r:4046},{y:2016,r:7000},{y:2017,r:11759},{y:2018,r:21461},{y:2019,r:24578},{y:2020,r:31536},{y:2021,r:53823},{y:2022,r:81462},{y:2023,r:96773},{y:2024,r:97690}],
    e:[{y:2009,e:514},{y:2010,e:899},{y:2011,e:1417},{y:2012,e:2964},{y:2013,e:5859},{y:2014,e:10161},{y:2015,e:13058},{y:2016,e:17782},{y:2017,e:37543},{y:2018,e:48817},{y:2019,e:48016},{y:2020,e:70757},{y:2021,e:99290},{y:2022,e:127855},{y:2023,e:140473},{y:2024,e:125665}]},
  { n:"SpaceX", f:2002, c:"#005288", t:"Aerospace / Starlink", cat:"Aerospace", note:"Est.",
    d:[{y:2008,r:10},{y:2009,r:20},{y:2010,r:50},{y:2012,r:120},{y:2013,r:400},{y:2014,r:1000},{y:2015,r:945},{y:2016,r:1200},{y:2017,r:1500},{y:2018,r:2000},{y:2019,r:2000},{y:2020,r:2000},{y:2021,r:3000},{y:2022,r:4600},{y:2023,r:8700},{y:2024,r:14200}],
    e:[{y:2005,e:160},{y:2008,e:500},{y:2010,e:1100},{y:2012,e:1800},{y:2014,e:3800},{y:2016,e:5000},{y:2017,e:6000},{y:2018,e:7000},{y:2019,e:8000},{y:2020,e:9500},{y:2021,e:10000},{y:2022,e:12000},{y:2023,e:13000},{y:2024,e:15000}]},
  { n:"Intuitive Surgical", f:1995, c:"#00A94F", t:"Surgical Robotics", cat:"Medical Devices",
    d:[{y:1998,r:2},{y:1999,r:8},{y:2000,r:26.6},{y:2001,r:51.7},{y:2002,r:72},{y:2003,r:92},{y:2004,r:138.8},{y:2005,r:227.3},{y:2006,r:372.7},{y:2007,r:600.8},{y:2008,r:874.9},{y:2009,r:1052},{y:2010,r:1413},{y:2011,r:1757},{y:2012,r:2179},{y:2013,r:2265},{y:2014,r:2132},{y:2015,r:2384},{y:2016,r:2707},{y:2017,r:3138},{y:2018,r:3724},{y:2019,r:4479},{y:2020,r:4358},{y:2021,r:5710},{y:2022,r:6222},{y:2023,r:7124},{y:2024,r:8350}],
    e:[{y:2000,e:200},{y:2005,e:800},{y:2008,e:1300},{y:2010,e:2000},{y:2012,e:2800},{y:2014,e:3200},{y:2015,e:3600},{y:2016,e:3800},{y:2017,e:4300},{y:2018,e:5100},{y:2019,e:6150},{y:2020,e:6700},{y:2021,e:8500},{y:2022,e:10300},{y:2023,e:13676},{y:2024,e:15638}]},
  { n:"Dexcom", f:1999, c:"#0077B6", t:"Continuous Glucose Monitors", cat:"Medical Devices",
    d:[{y:2004,r:0.1},{y:2005,r:0.5},{y:2006,r:2.17},{y:2007,r:4.63},{y:2008,r:9.84},{y:2009,r:29.7},{y:2010,r:48.6},{y:2011,r:76.3},{y:2012,r:99.9},{y:2013,r:160},{y:2014,r:259},{y:2015,r:402},{y:2016,r:573},{y:2017,r:719},{y:2018,r:1032},{y:2019,r:1476},{y:2020,r:1927},{y:2021,r:2449},{y:2022,r:2910},{y:2023,r:3622},{y:2024,r:4033}],
    e:[{y:2012,e:800},{y:2014,e:1400},{y:2015,e:2000},{y:2016,e:2600},{y:2017,e:3200},{y:2018,e:4400},{y:2019,e:5500},{y:2020,e:6700},{y:2021,e:7700},{y:2022,e:9000},{y:2023,e:10000},{y:2024,e:11000}]},
  { n:"Insulet", f:2000, c:"#90BE6D", t:"Insulin Pumps (Omnipod)", cat:"Medical Devices",
    d:[{y:2005,r:0.5},{y:2006,r:4},{y:2007,r:13.4},{y:2008,r:36.1},{y:2009,r:66},{y:2010,r:97},{y:2011,r:152},{y:2012,r:211},{y:2013,r:247},{y:2014,r:231},{y:2015,r:264},{y:2016,r:367},{y:2017,r:464},{y:2018,r:564},{y:2019,r:738},{y:2020,r:904},{y:2021,r:1098},{y:2022,r:1305},{y:2023,r:1697},{y:2024,r:2072}],
    e:[{y:2010,e:400},{y:2012,e:600},{y:2014,e:1000},{y:2016,e:1400},{y:2018,e:3700},{y:2019,e:4400},{y:2020,e:5100},{y:2021,e:6500},{y:2022,e:7200},{y:2023,e:8200},{y:2024,e:9200}]},
  { n:"Axon", f:1993, c:"#FDB813", t:"Taser → Body Cams → Cloud", cat:"Security & Defense",
    d:[{y:1994,r:0.1},{y:1995,r:0.3},{y:1996,r:0.5},{y:1997,r:0.8},{y:1998,r:1.5},{y:1999,r:2.2},{y:2000,r:3.4},{y:2001,r:6.8},{y:2002,r:13.6},{y:2003,r:24.5},{y:2004,r:68},{y:2005,r:53},{y:2006,r:67},{y:2007,r:81},{y:2008,r:86},{y:2009,r:78},{y:2010,r:87},{y:2011,r:99},{y:2012,r:130},{y:2013,r:137},{y:2014,r:164},{y:2015,r:199},{y:2016,r:268},{y:2017,r:344},{y:2018,r:420},{y:2019,r:531},{y:2020,r:681},{y:2021,r:863},{y:2022,r:1187},{y:2023,r:1561},{y:2024,r:2083}],
    e:[{y:2010,e:400},{y:2012,e:500},{y:2014,e:750},{y:2016,e:1000},{y:2017,e:1200},{y:2018,e:1500},{y:2019,e:1900},{y:2020,e:2300},{y:2021,e:2800},{y:2022,e:3300},{y:2023,e:3800},{y:2024,e:4400}]},
  { n:"Peloton", f:2012, c:"#C13584", t:"Fitness HW + Subscription", cat:"Consumer",
    d:[{y:2014,r:5},{y:2015,r:15},{y:2016,r:60},{y:2017,r:219},{y:2018,r:435},{y:2019,r:915},{y:2020,r:1826},{y:2021,r:4022},{y:2022,r:3582},{y:2023,r:2800},{y:2024,r:2700}],
    e:[{y:2018,e:1000},{y:2019,e:2700},{y:2020,e:4700},{y:2021,e:6700},{y:2022,e:8662},{y:2023,e:4442},{y:2024,e:3218}]},
  { n:"GoPro", f:2002, c:"#4169E1", t:"Action Cameras", cat:"Consumer",
    d:[{y:2004,r:0.15},{y:2005,r:0.35},{y:2006,r:0.8},{y:2007,r:3.4},{y:2008,r:8},{y:2009,r:25},{y:2010,r:64},{y:2011,r:234},{y:2012,r:526},{y:2013,r:986},{y:2014,r:1394},{y:2015,r:1620},{y:2016,r:1185},{y:2017,r:1180},{y:2018,r:1148},{y:2019,r:1195},{y:2020,r:892},{y:2021,r:1161},{y:2022,r:1094},{y:2023,r:1005},{y:2024,r:801}],
    e:[{y:2012,e:300},{y:2013,e:650},{y:2014,e:1200},{y:2015,e:1600},{y:2016,e:1748},{y:2017,e:1254},{y:2018,e:1100},{y:2019,e:1100},{y:2020,e:850},{y:2021,e:900},{y:2022,e:800},{y:2023,e:750},{y:2024,e:680}]},
  { n:"Fitbit", f:2007, c:"#9B59B6", t:"Wearables", cat:"Consumer", note:"→Google 2021",
    d:[{y:2009,r:3},{y:2010,r:15},{y:2011,r:30},{y:2012,r:76},{y:2013,r:271},{y:2014,r:745},{y:2015,r:1858},{y:2016,r:2169},{y:2017,r:1616},{y:2018,r:1512},{y:2019,r:1434},{y:2020,r:1434}],
    e:[{y:2013,e:300},{y:2014,e:700},{y:2015,e:1500},{y:2016,e:1800},{y:2017,e:1800},{y:2018,e:1674},{y:2019,e:1700},{y:2020,e:1600}]},
  { n:"DJI", f:2006, c:"#E8A838", t:"Drones / Imaging", cat:"Consumer", note:"Est.",
    d:[{y:2010,r:4},{y:2011,r:10},{y:2012,r:25},{y:2013,r:130},{y:2014,r:1000},{y:2015,r:1200},{y:2016,r:1450},{y:2017,r:2600},{y:2018,r:2700},{y:2019,r:3000},{y:2020,r:2700},{y:2021,r:3200},{y:2022,r:3400},{y:2023,r:3600},{y:2024,r:3800}],
    e:[{y:2013,e:500},{y:2014,e:1500},{y:2015,e:3500},{y:2016,e:6000},{y:2017,e:11000},{y:2018,e:14000},{y:2019,e:14000},{y:2020,e:14000},{y:2022,e:14000},{y:2024,e:14000}]},
  { n:"Enphase", f:2006, c:"#F77F00", t:"Solar Microinverters", cat:"Energy",
    d:[{y:2008,r:3},{y:2009,r:15},{y:2010,r:62},{y:2011,r:149},{y:2012,r:152},{y:2013,r:202},{y:2014,r:343},{y:2015,r:357},{y:2016,r:322},{y:2017,r:286},{y:2018,r:316},{y:2019,r:624},{y:2020,r:774},{y:2021,r:1382},{y:2022,r:2331},{y:2023,r:2291},{y:2024,r:1331}],
    e:[{y:2012,e:250},{y:2014,e:600},{y:2016,e:700},{y:2018,e:750},{y:2019,e:1000},{y:2020,e:1300},{y:2021,e:2100},{y:2022,e:3500},{y:2023,e:3600},{y:2024,e:3000}]},
  { n:"Sonos", f:2002, c:"#34495E", t:"Speakers + Ecosystem", cat:"Consumer",
    d:[{y:2005,r:10},{y:2006,r:30},{y:2007,r:60},{y:2008,r:40},{y:2009,r:80},{y:2010,r:150},{y:2011,r:250},{y:2012,r:350},{y:2013,r:500},{y:2014,r:650},{y:2015,r:844},{y:2016,r:901},{y:2017,r:993},{y:2018,r:1137},{y:2019,r:1261},{y:2020,r:1327},{y:2021,r:1717},{y:2022,r:1753},{y:2023,r:1657},{y:2024,r:1518}],
    e:[{y:2012,e:700},{y:2014,e:1100},{y:2016,e:1400},{y:2018,e:1500},{y:2019,e:1600},{y:2020,e:1700},{y:2021,e:1800},{y:2022,e:1900},{y:2023,e:1900},{y:2024,e:1700}]},
  { n:"iRobot", f:1990, c:"#1ABC9C", t:"Roomba / Home Robotics", cat:"Consumer",
    d:[{y:1991,r:0.2},{y:1993,r:0.5},{y:1995,r:1},{y:1998,r:3},{y:2000,r:6},{y:2001,r:9},{y:2002,r:16},{y:2003,r:53},{y:2004,r:95},{y:2005,r:125},{y:2006,r:168},{y:2007,r:227},{y:2008,r:281},{y:2009,r:262},{y:2010,r:360},{y:2011,r:427},{y:2012,r:436},{y:2013,r:487},{y:2014,r:557},{y:2015,r:617},{y:2016,r:661},{y:2017,r:884},{y:2018,r:1093},{y:2019,r:1214},{y:2020,r:1434},{y:2021,r:1564},{y:2022,r:1183},{y:2023,r:891},{y:2024,r:682}],
    e:[{y:2005,e:260},{y:2008,e:400},{y:2010,e:520},{y:2012,e:530},{y:2014,e:530},{y:2016,e:600},{y:2017,e:710},{y:2018,e:1100},{y:2019,e:1150},{y:2020,e:1350},{y:2021,e:1500},{y:2022,e:1400},{y:2023,e:1050},{y:2024,e:800}]},
  { n:"Mobileye", f:1999, c:"#E74C3C", t:"ADAS Chips + Autonomous", cat:"Automotive", note:"Intel sub. '17–22",
    d:[{y:2008,r:5},{y:2009,r:8},{y:2010,r:13},{y:2011,r:19},{y:2012,r:40},{y:2013,r:81},{y:2014,r:201},{y:2015,r:268},{y:2016,r:358},{y:2017,r:466},{y:2018,r:698},{y:2019,r:879},{y:2020,r:967},{y:2021,r:1386},{y:2022,r:1869},{y:2023,r:2079},{y:2024,r:1654}],
    e:[{y:2014,e:600},{y:2016,e:1000},{y:2017,e:1500},{y:2019,e:1900},{y:2020,e:2100},{y:2021,e:2700},{y:2022,e:3100},{y:2023,e:3600},{y:2024,e:3500}]},
  { n:"Planet Labs", f:2010, c:"#8E44AD", t:"Satellite Imaging", cat:"Aerospace",
    d:[{y:2015,r:34},{y:2016,r:43},{y:2017,r:55},{y:2018,r:70},{y:2019,r:89},{y:2020,r:113},{y:2021,r:131},{y:2022,r:191},{y:2023,r:221},{y:2024,r:244}],
    e:[{y:2018,e:400},{y:2019,e:500},{y:2020,e:550},{y:2021,e:700},{y:2022,e:900},{y:2023,e:860},{y:2024,e:800}]},
  { n:"Rocket Lab", f:2006, c:"#00B4D8", t:"Launch / Space Systems", cat:"Aerospace",
    d:[{y:2017,r:10},{y:2018,r:30},{y:2019,r:48},{y:2020,r:35},{y:2021,r:62},{y:2022,r:211},{y:2023,r:245},{y:2024,r:436}],
    e:[{y:2018,e:350},{y:2019,e:500},{y:2020,e:550},{y:2021,e:800},{y:2022,e:1400},{y:2023,e:1800},{y:2024,e:2000}]},
  { n:"Anduril", f:2017, c:"#FF6B00", t:"Defense Tech / Autonomous", cat:"Security & Defense", note:"Est.",
    d:[{y:2018,r:2},{y:2019,r:10},{y:2020,r:100},{y:2021,r:150},{y:2022,r:250},{y:2023,r:420},{y:2024,r:1000}],
    e:[{y:2019,e:60},{y:2020,e:150},{y:2021,e:500},{y:2022,e:1500},{y:2023,e:2500},{y:2024,e:3500}]},
  { n:"Cognex", f:1981, c:"#7B2D8E", t:"Machine Vision", cat:"Industrial",
    d:[{y:1988,r:11},{y:1990,r:23.5},{y:1995,r:80},{y:2000,r:160},{y:2001,r:120},{y:2002,r:100},{y:2003,r:130},{y:2004,r:180},{y:2005,r:217},{y:2006,r:238},{y:2007,r:226},{y:2008,r:243},{y:2009,r:176},{y:2010,r:291},{y:2011,r:322},{y:2012,r:324},{y:2013,r:308},{y:2014,r:427},{y:2015,r:451},{y:2016,r:530},{y:2017,r:766},{y:2018,r:806},{y:2019,r:726},{y:2020,r:811},{y:2021,r:1037},{y:2022,r:1006},{y:2023,r:838},{y:2024,r:915}],
    e:[{y:2000,e:600},{y:2005,e:700},{y:2008,e:850},{y:2010,e:1000},{y:2012,e:1100},{y:2014,e:1300},{y:2016,e:1600},{y:2017,e:1900},{y:2018,e:2100},{y:2019,e:2200},{y:2020,e:2200},{y:2021,e:2600},{y:2022,e:2800},{y:2023,e:2700},{y:2024,e:2600}]},
  { n:"Keyence", f:1974, c:"#D42B1E", t:"Industrial Sensors", cat:"Industrial",
    d:[{y:1997,r:133},{y:2000,r:250},{y:2004,r:910},{y:2006,r:1200},{y:2008,r:1700},{y:2010,r:1900},{y:2012,r:2600},{y:2013,r:2900},{y:2014,r:3400},{y:2015,r:3800},{y:2016,r:3600},{y:2017,r:4200},{y:2018,r:5100},{y:2019,r:4800},{y:2020,r:4700},{y:2021,r:5900},{y:2022,r:6680},{y:2023,r:6690},{y:2024,r:7000}],
    e:[{y:2005,e:2100},{y:2008,e:2800},{y:2010,e:3300},{y:2012,e:3700},{y:2014,e:4600},{y:2016,e:5300},{y:2017,e:5900},{y:2018,e:6500},{y:2019,e:7300},{y:2020,e:8380},{y:2021,e:8961},{y:2022,e:9607},{y:2023,e:10580},{y:2024,e:11200}]},
  { n:"Shield AI", f:2015, c:"#556B2F", t:"Military Drones + AI", cat:"Security & Defense", note:"Est.",
    d:[{y:2019,r:5},{y:2020,r:15},{y:2021,r:50},{y:2022,r:100},{y:2023,r:163},{y:2024,r:267}],
    e:[{y:2020,e:100},{y:2021,e:200},{y:2022,e:500},{y:2023,e:700},{y:2024,e:900}]},
  { n:"Rivian", f:2009, c:"#A0522D", t:"Electric Trucks & SUVs", cat:"Automotive",
    d:[{y:2021,r:55},{y:2022,r:1658},{y:2023,r:4434},{y:2024,r:4970}],
    e:[{y:2020,e:3400},{y:2021,e:10500},{y:2022,e:15200},{y:2023,e:16700},{y:2024,e:17300}]},
  { n:"AMD", f:1969, c:"#DC143C", t:"CPUs / GPUs / Data Center", cat:"Computing",
    d:[{y:1971,r:4.6},{y:1974,r:26.5},{y:1977,r:100},{y:1978,r:150},{y:1980,r:226},{y:1985,r:900},{y:1990,r:1100},{y:1992,r:1514},{y:1993,r:1648},{y:1994,r:2159},{y:1995,r:2468},{y:1996,r:1953},{y:1997,r:2356},{y:1998,r:2542},{y:1999,r:2857},{y:2000,r:4644},{y:2001,r:3892},{y:2002,r:2697},{y:2003,r:3519},{y:2004,r:5001},{y:2005,r:5848},{y:2006,r:5627},{y:2007,r:5858},{y:2008,r:5808},{y:2009,r:5403},{y:2010,r:6494},{y:2011,r:6568},{y:2012,r:5422},{y:2013,r:5299},{y:2014,r:5506},{y:2015,r:3991},{y:2016,r:4319},{y:2017,r:5253},{y:2018,r:6475},{y:2019,r:6731},{y:2020,r:9763},{y:2021,r:16434},{y:2022,r:23601},{y:2023,r:22680},{y:2024,r:25785}],
    e:[{y:1993,e:12060},{y:1994,e:11800},{y:1996,e:12797},{y:1997,e:12200},{y:1998,e:12800},{y:1999,e:13800},{y:2000,e:13387},{y:2001,e:14696},{y:2002,e:14415},{y:2003,e:12146},{y:2004,e:8300},{y:2005,e:9860},{y:2006,e:16500},{y:2007,e:16420},{y:2008,e:14700},{y:2009,e:10400},{y:2010,e:11100},{y:2011,e:11100},{y:2012,e:10340},{y:2013,e:10671},{y:2014,e:9700},{y:2015,e:9100},{y:2016,e:8200},{y:2017,e:8900},{y:2018,e:10100},{y:2019,e:11400},{y:2020,e:12600},{y:2021,e:15500},{y:2022,e:25000},{y:2023,e:26000},{y:2024,e:28000}]},
  { n:"Garmin", f:1989, c:"#4682B4", t:"GPS / Wearables / Avionics", cat:"Computing",
    d:[{y:1991,r:15},{y:1992,r:30},{y:1993,r:50},{y:1994,r:75},{y:1995,r:100},{y:1996,r:130},{y:1997,r:160},{y:1998,r:210},{y:1999,r:270},{y:2000,r:345},{y:2001,r:370},{y:2002,r:465},{y:2003,r:590},{y:2004,r:760},{y:2005,r:1027},{y:2006,r:1774},{y:2007,r:3180},{y:2008,r:3494},{y:2009,r:2946},{y:2010,r:2690},{y:2011,r:2759},{y:2012,r:2716},{y:2013,r:2632},{y:2014,r:2871},{y:2015,r:2821},{y:2016,r:3046},{y:2017,r:3122},{y:2018,r:3348},{y:2019,r:3758},{y:2020,r:4187},{y:2021,r:4983},{y:2022,r:4861},{y:2023,r:5229},{y:2024,r:6297}],
    e:[{y:2000,e:1200},{y:2005,e:3400},{y:2006,e:4200},{y:2007,e:6800},{y:2008,e:8900},{y:2009,e:8900},{y:2010,e:9700},{y:2011,e:10000},{y:2012,e:10200},{y:2013,e:10900},{y:2014,e:11000},{y:2015,e:11600},{y:2016,e:12000},{y:2017,e:12600},{y:2018,e:13000},{y:2019,e:14100},{y:2020,e:16000},{y:2021,e:18400},{y:2022,e:19200},{y:2023,e:20000},{y:2024,e:20600}]},
  { n:"Generac", f:1959, c:"#B8860B", t:"Generators + Solar/Storage", cat:"Energy",
    d:[{y:2007,r:556},{y:2008,r:574},{y:2009,r:588},{y:2010,r:593},{y:2011,r:792},{y:2012,r:1176},{y:2013,r:1489},{y:2014,r:1461},{y:2015,r:1316},{y:2016,r:1450},{y:2017,r:1681},{y:2018,r:2024},{y:2019,r:2204},{y:2020,r:2485},{y:2021,r:3737},{y:2022,r:4565},{y:2023,r:4023},{y:2024,r:4296}],
    e:[{y:2010,e:2300},{y:2012,e:3300},{y:2014,e:3700},{y:2016,e:4300},{y:2018,e:5200},{y:2019,e:5600},{y:2020,e:6000},{y:2021,e:8600},{y:2022,e:9100},{y:2023,e:8000},{y:2024,e:7800}]},
  { n:"SolarEdge", f:2006, c:"#6A5ACD", t:"Solar Inverters", cat:"Energy",
    d:[{y:2010,r:5},{y:2011,r:20},{y:2012,r:60},{y:2013,r:133},{y:2014,r:233},{y:2015,r:325},{y:2016,r:490},{y:2017,r:607},{y:2018,r:937},{y:2019,r:1425},{y:2020,r:1459},{y:2021,r:1964},{y:2022,r:3110},{y:2023,r:2977},{y:2024,r:901}],
    e:[{y:2014,e:500},{y:2015,e:750},{y:2016,e:1100},{y:2017,e:1500},{y:2018,e:2200},{y:2019,e:3000},{y:2020,e:3500},{y:2021,e:4500},{y:2022,e:5500},{y:2023,e:6600},{y:2024,e:4300}]},
  { n:"Qualcomm", f:1985, c:"#3253DC", t:"Mobile Chips / Licensing", cat:"Computing",
    d:[{y:1989,r:32},{y:1994,r:272},{y:1995,r:387},{y:1996,r:814},{y:1997,r:2100},{y:1998,r:3350},{y:1999,r:3940},{y:2000,r:3200},{y:2001,r:2680},{y:2002,r:2920},{y:2003,r:3850},{y:2004,r:4880},{y:2005,r:5670},{y:2006,r:7530},{y:2007,r:8870},{y:2008,r:11140},{y:2009,r:10390},{y:2010,r:10980},{y:2011,r:14960},{y:2012,r:19120},{y:2013,r:24870},{y:2014,r:26490},{y:2015,r:25280},{y:2016,r:23550},{y:2017,r:22260},{y:2018,r:22610},{y:2019,r:24270},{y:2020,r:23530},{y:2021,r:33570},{y:2022,r:44200},{y:2023,r:35820},{y:2024,r:38960}],
    e:[{y:1996,e:6000},{y:1997,e:9000},{y:1998,e:11600},{y:1999,e:9700},{y:2000,e:6300},{y:2001,e:6500},{y:2002,e:8100},{y:2003,e:7400},{y:2004,e:7600},{y:2005,e:9300},{y:2006,e:11200},{y:2007,e:12800},{y:2008,e:15400},{y:2009,e:16100},{y:2010,e:17500},{y:2011,e:21200},{y:2012,e:26600},{y:2013,e:31000},{y:2014,e:31300},{y:2015,e:33000},{y:2016,e:30500},{y:2017,e:33800},{y:2018,e:35400},{y:2019,e:37000},{y:2020,e:41000},{y:2021,e:45000},{y:2022,e:51000},{y:2023,e:50000},{y:2024,e:49000}]},
  { n:"Ubiquiti", f:2005, c:"#008B8B", t:"Networking HW (Bootstrapped)", cat:"Computing",
    d:[{y:2008,r:22},{y:2009,r:63},{y:2010,r:137},{y:2011,r:198},{y:2012,r:354},{y:2013,r:321},{y:2014,r:572},{y:2015,r:596},{y:2016,r:666},{y:2017,r:865},{y:2018,r:1020},{y:2019,r:1160},{y:2020,r:1280},{y:2021,r:1900},{y:2022,r:1690},{y:2023,r:1940},{y:2024,r:1930}],
    e:[{y:2012,e:210},{y:2014,e:400},{y:2016,e:660},{y:2018,e:930},{y:2019,e:1000},{y:2020,e:1200},{y:2021,e:1400},{y:2022,e:1500},{y:2023,e:1500},{y:2024,e:1500}]},
  { n:"Arista Networks", f:2004, c:"#FF4500", t:"Cloud Networking Switches", cat:"Computing",
    d:[{y:2008,r:5},{y:2009,r:30},{y:2010,r:72},{y:2011,r:140},{y:2012,r:193},{y:2013,r:361},{y:2014,r:584},{y:2015,r:838},{y:2016,r:1130},{y:2017,r:1650},{y:2018,r:2150},{y:2019,r:2410},{y:2020,r:2320},{y:2021,r:2950},{y:2022,r:4380},{y:2023,r:5860},{y:2024,r:7003}],
    e:[{y:2012,e:600},{y:2014,e:1000},{y:2015,e:1300},{y:2016,e:1600},{y:2017,e:2000},{y:2018,e:2500},{y:2019,e:2800},{y:2020,e:3100},{y:2021,e:3500},{y:2022,e:4200},{y:2023,e:5000},{y:2024,e:5800}]},
  { n:"Roku", f:2002, c:"#6B2FA0", t:"Streaming HW → Platform", cat:"Consumer",
    d:[{y:2015,r:320},{y:2016,r:399},{y:2017,r:513},{y:2018,r:743},{y:2019,r:1129},{y:2020,r:1778},{y:2021,r:2765},{y:2022,r:2717},{y:2023,r:3485},{y:2024,r:4113}],
    e:[{y:2017,e:850},{y:2018,e:1200},{y:2019,e:1700},{y:2020,e:2300},{y:2021,e:3600},{y:2022,e:3800},{y:2023,e:3100},{y:2024,e:3000}]},
  { n:"AeroVironment", f:1971, c:"#2E8B57", t:"Military Drones (Raven/Switchblade)", cat:"Security & Defense",
    d:[{y:2004,r:47},{y:2005,r:105},{y:2006,r:139},{y:2007,r:174},{y:2008,r:216},{y:2009,r:248},{y:2010,r:250},{y:2011,r:293},{y:2012,r:325},{y:2013,r:240},{y:2014,r:252},{y:2015,r:259},{y:2016,r:234},{y:2017,r:233},{y:2018,r:268},{y:2019,r:314},{y:2020,r:367},{y:2021,r:395},{y:2022,r:446},{y:2023,r:541},{y:2024,r:717}],
    e:[{y:2005,e:500},{y:2008,e:900},{y:2010,e:800},{y:2012,e:1000},{y:2014,e:900},{y:2016,e:800},{y:2018,e:1000},{y:2019,e:1200},{y:2020,e:1400},{y:2021,e:1700},{y:2022,e:2200},{y:2023,e:2500},{y:2024,e:3200}]},
  { n:"Bloom Energy", f:2001, c:"#228B22", t:"Solid Oxide Fuel Cells", cat:"Energy",
    d:[{y:2014,r:248},{y:2015,r:173},{y:2016,r:209},{y:2017,r:366},{y:2018,r:633},{y:2019,r:785},{y:2020,r:794},{y:2021,r:972},{y:2022,r:1199},{y:2023,r:1334},{y:2024,r:1474}],
    e:[{y:2018,e:1400},{y:2019,e:1500},{y:2020,e:1600},{y:2021,e:1700},{y:2022,e:2000},{y:2023,e:2300},{y:2024,e:2500}]},
  { n:"Tandem Diabetes", f:2006, c:"#00CED1", t:"Insulin Pumps (t:slim)", cat:"Medical Devices",
    d:[{y:2012,r:2.5},{y:2013,r:29},{y:2014,r:50},{y:2015,r:73},{y:2016,r:84},{y:2017,r:108},{y:2018,r:184},{y:2019,r:362},{y:2020,r:499},{y:2021,r:703},{y:2022,r:801},{y:2023,r:748},{y:2024,r:940}],
    e:[{y:2014,e:250},{y:2016,e:400},{y:2017,e:600},{y:2018,e:950},{y:2019,e:1700},{y:2020,e:2100},{y:2021,e:2700},{y:2022,e:3300},{y:2023,e:3900},{y:2024,e:4200}]},
  { n:"Trimble", f:1978, c:"#D2691E", t:"GPS / Positioning / Construction", cat:"Industrial",
    d:[{y:1990,r:63},{y:1998,r:268},{y:2000,r:370},{y:2005,r:775},{y:2006,r:940},{y:2007,r:1222},{y:2008,r:1330},{y:2009,r:1130},{y:2010,r:1290},{y:2011,r:1640},{y:2012,r:2040},{y:2013,r:2290},{y:2014,r:2400},{y:2015,r:2290},{y:2016,r:2360},{y:2017,r:2650},{y:2018,r:3110},{y:2019,r:3260},{y:2020,r:3150},{y:2021,r:3660},{y:2022,r:3680},{y:2023,r:3800},{y:2024,r:3680}],
    e:[{y:2005,e:3000},{y:2008,e:5100},{y:2010,e:5400},{y:2012,e:7300},{y:2013,e:8400},{y:2014,e:9200},{y:2015,e:9100},{y:2016,e:8800},{y:2017,e:9500},{y:2018,e:10700},{y:2019,e:11300},{y:2020,e:11300},{y:2021,e:11800},{y:2022,e:12300},{y:2023,e:12500},{y:2024,e:12000}]},
  { n:"Penumbra", f:2004, c:"#FF69B4", t:"Neurovascular Devices", cat:"Medical Devices",
    d:[{y:2007,r:2},{y:2008,r:8},{y:2009,r:18},{y:2010,r:32},{y:2011,r:50},{y:2012,r:65},{y:2013,r:89},{y:2014,r:126},{y:2015,r:186},{y:2016,r:263},{y:2017,r:334},{y:2018,r:445},{y:2019,r:547},{y:2020,r:560},{y:2021,r:748},{y:2022,r:847},{y:2023,r:1059},{y:2024,r:1195}],
    e:[{y:2015,e:800},{y:2016,e:1000},{y:2017,e:1300},{y:2018,e:1700},{y:2019,e:2500},{y:2020,e:3100},{y:2021,e:3800},{y:2022,e:4200},{y:2023,e:4600},{y:2024,e:5000}]},
  { n:"Lucid Motors", f:2007, c:"#C0C0C0", t:"Luxury EVs", cat:"Automotive",
    d:[{y:2020,r:4},{y:2021,r:27},{y:2022,r:608},{y:2023,r:595},{y:2024,r:808}],
    e:[{y:2021,e:3000},{y:2022,e:7200},{y:2023,e:7700},{y:2024,e:6400}]},
  { n:"Symbotic", f:2007, c:"#20B2AA", t:"Warehouse Robotics (AI)", cat:"Industrial",
    d:[{y:2019,r:100},{y:2020,r:92},{y:2021,r:252},{y:2022,r:593},{y:2023,r:1176},{y:2024,r:1788}],
    e:[{y:2021,e:500},{y:2022,e:1000},{y:2023,e:1500},{y:2024,e:2000}]},
  { n:"Luminar", f:2012, c:"#DAA520", t:"Lidar for Autonomous Vehicles", cat:"Automotive",
    d:[{y:2020,r:14},{y:2021,r:32},{y:2022,r:41},{y:2023,r:70},{y:2024,r:75}],
    e:[{y:2020,e:350},{y:2021,e:500},{y:2022,e:700},{y:2023,e:800},{y:2024,e:700}]},
  { n:"Lumafield", f:2019, c:"#7B68EE", t:"Industrial CT Scanning", cat:"Industrial",
    d:[{y:2020,r:1},{y:2021,r:3},{y:2022,r:9},{y:2023,r:15},{y:2024,r:23}],
    e:[{y:2021,e:15},{y:2022,e:40},{y:2023,e:80},{y:2024,e:130}]},
];

const CATEGORIES = ["Medical Devices","Computing","Automotive","Aerospace","Consumer","Energy","Security & Defense","Industrial"];

/* Smoothed P25/P50/P75 by years-from-founding (ex NVIDIA/Tesla/SpaceX, N≥4, log-space 3pt MA)
   Updated Feb 2026 with 39 companies, 676 revenue data points, 457 employee data points */
const TREND = [
  {x:2,lo:2,mid:3,hi:5,n:9},{x:3,lo:2,mid:10,hi:15,n:13},{x:4,lo:5,mid:13,hi:50,n:17},
  {x:5,lo:11,mid:27,hi:76,n:22},{x:6,lo:14,mid:51,hi:142,n:22},{x:7,lo:27,mid:100,hi:171,n:23},
  {x:8,lo:50,mid:125,hi:255,n:24},{x:9,lo:73,mid:234,hi:361,n:25},{x:10,lo:94,mid:296,hi:587,n:24},
  {x:11,lo:114,mid:359,hi:832,n:26},{x:12,lo:76,mid:343,hi:1196,n:28},{x:13,lo:191,mid:545,hi:1481,n:28},
  {x:14,lo:170,mid:545,hi:1265,n:28},{x:15,lo:326,mid:877,hi:1848,n:26},{x:16,lo:442,mid:1082,hi:2240,n:26},
  {x:17,lo:633,mid:1261,hi:2291,n:25},{x:18,lo:752,mid:1327,hi:2723,n:23},{x:19,lo:766,mid:1717,hi:3247,n:19},
  {x:20,lo:892,mid:1476,hi:3538,n:19},{x:21,lo:1005,mid:1657,hi:3485,n:17},{x:22,lo:710,mid:1452,hi:3382,n:16},
  {x:23,lo:487,mid:1697,hi:2910,n:13},{x:24,lo:1103,mid:2079,hi:4051,n:11},{x:25,lo:876,mid:2515,hi:4277,n:10},
  {x:26,lo:531,mid:2468,hi:5710,n:9},{x:27,lo:775,mid:1953,hi:6222,n:9},{x:28,lo:940,mid:2356,hi:7124,n:9},
  {x:29,lo:1214,mid:2542,hi:8350,n:9},{x:30,lo:1330,mid:1561,hi:3758,n:9},{x:31,lo:1456,mid:3135,hi:9371,n:8},
  {x:32,lo:1192,mid:1290,hi:4438,n:7},{x:33,lo:659,mid:1640,hi:3779,n:7},{x:34,lo:624,mid:1870,hi:3947,n:8},
  {x:35,lo:970,mid:3646,hi:5973,n:6},{x:36,lo:1050,mid:2150,hi:4986,n:6},{x:37,lo:806,mid:2290,hi:5627,n:5},
  {x:38,lo:1135,mid:2480,hi:5044,n:6},{x:39,lo:1271,mid:2775,hi:5081,n:6},{x:40,lo:1037,mid:3110,hi:3400,n:5},
  {x:41,lo:1006,mid:3260,hi:3800,n:5},{x:42,lo:838,mid:3150,hi:3600,n:5},{x:43,lo:915,mid:3660,hi:4200,n:5},
  {x:44,lo:2825,mid:4390,hi:5150,n:4},{x:45,lo:2909,mid:4300,hi:4977,n:4},{x:46,lo:2818,mid:3836,hi:4168,n:4},
  {x:48,lo:496,mid:2905,hi:5610,n:4},{x:49,lo:522,mid:3525,hi:6529,n:4},{x:50,lo:540,mid:3660,hi:6798,n:4},
];

function fmt(v) {
  if (v >= 100000) return `$${(v/1000).toFixed(0)}B`;
  if (v >= 1000) return `$${(v/1000).toFixed(1)}B`;
  if (v >= 10) return `$${Math.round(v)}M`;
  if (v >= 1) return `$${v.toFixed(1)}M`;
  return `$${(v*1000).toFixed(0)}K`;
}
function fmtE(v) {
  if (v >= 100000) return `${(v/1000).toFixed(0)}K`;
  if (v >= 1000) return v%1000===0?`${v/1000}K`:`${(v/1000).toFixed(1)}K`;
  return `${v}`;
}

function Chart({ show, viewMode, scaleMode, hov, setHov, hovPt, setHovPt, showTrend, xRange, metric }) {
  const [hovTrend, setHovTrend] = useState(null);
  const W = 940, H = 540;
  const pad = { t:32, r:36, b:52, l:72 };
  const pW = W-pad.l-pad.r, pH = H-pad.t-pad.b;
  const vis = C.filter(co => show.includes(co.n));
  const sc = scaleMode, vw = viewMode;
  const isEmp = metric==="employees";
  const fv = isEmp ? fmtE : fmt;

  const proc = useMemo(() => vis.map(co => {
    const src = isEmp ? (co.e||[]) : co.d;
    return { ...co, pts: src.map(d => ({ x: vw==="founding" ? d.y-co.f : d.y, r: isEmp ? d.e : d.r, y:d.y })) };
  }), [vis, vw, isEmp]);

  const { xMn, xMx, yMx } = useMemo(() => {
    let a=Infinity, b=-Infinity, c=0;
    proc.forEach(co => co.pts.forEach(p => { if(p.x<a)a=p.x; if(p.x>b)b=p.x; if(p.r>c)c=p.r; }));
    if (showTrend && vw==="founding") TREND.forEach(t => { if(t.x>b) b=t.x; if(t.hi>c) c=t.hi; });
    let xMin = vw==="founding"?0:(a===Infinity?2000:a);
    let xMax = b===-Infinity?2024:b;
    // Apply range override
    if (xRange) { xMin=xRange[0]; xMax=xRange[1]; }
    // Recalculate yMax for visible range
    let yMax = 0;
    proc.forEach(co => co.pts.forEach(p => { if(p.x>=xMin && p.x<=xMax && p.r>yMax) yMax=p.r; }));
    if (showTrend && vw==="founding") TREND.forEach(t => { if(t.x>=xMin && t.x<=xMax && t.hi>yMax) yMax=t.hi; });
    return { xMn:xMin, xMx:xMax, yMx:yMax||c||1 };
  }, [proc, vw, showTrend, xRange]);

  const logFloor = isEmp ? 5 : 0.05;
  const lMn = sc==="log"?Math.log10(logFloor):0, lMx = Math.log10(Math.max(yMx,1));
  const xPx = x => pad.l+((x-xMn)/(xMx-xMn||1))*pW;
  const yPx = r => {
    if(sc==="log") { const lv=Math.log10(Math.max(r,logFloor)); return pad.t+pH-((lv-lMn)/(lMx-lMn||1))*pH; }
    return pad.t+pH-(r/(yMx||1))*pH;
  };

  const yTks = useMemo(() => {
    if(sc==="log") {
      if(isEmp) return [10,100,1000,10000,100000].filter(v=>v<=yMx*1.5 && v>=5);
      return [0.1,1,10,100,1000,10000,100000].filter(v=>v<=yMx*1.5 && v>=0.05);
    }
    if(isEmp) {
      const st=yMx>100000?25000:yMx>50000?10000:yMx>10000?5000:yMx>5000?1000:yMx>1000?500:100;
      const t=[]; for(let v=0;v<=yMx*1.1;v+=st) t.push(v); return t;
    }
    const st=yMx>100000?25000:yMx>50000?20000:yMx>10000?5000:yMx>1000?500:100;
    const t=[]; for(let v=0;v<=yMx*1.1;v+=st) t.push(v); return t;
  }, [sc, yMx, isEmp]);

  const xTks = useMemo(() => {
    const t=[], st= (xMx-xMn)>40?10:5, s=vw==="founding"?0:Math.ceil(xMn/st)*st;
    for(let v=s;v<=xMx;v+=st) t.push(v);
    return [...new Set(t)].sort((a,b)=>a-b);
  }, [xMn, xMx, vw]);

  const path = pts => pts.filter(p=>p.r>0).length<2?"":pts.filter(p=>p.r>0).map((p,i)=>`${i===0?"M":"L"}${xPx(p.x).toFixed(1)},${yPx(p.r).toFixed(1)}`).join(" ");

  const lblOff = useMemo(() => {
    const o={};
    const ep = proc.map(co => { const vp=co.pts.filter(p=>p.x>=xMn&&p.x<=xMx&&p.r>0); const l=vp.length?vp[vp.length-1]:null; return l?{n:co.n,py:yPx(l.r)}:null; }).filter(Boolean).sort((a,b)=>a.py-b.py);
    ep.forEach(e=>o[e.n]=0);
    for(let p=0;p<20;p++) for(let i=1;i<ep.length;i++) {
      const pv=ep[i-1],cu=ep[i]; const pY=pv.py+(o[pv.n]||0),cY=cu.py+(o[cu.n]||0);
      if(cY-pY<10){const sh=(10-(cY-pY))/2; o[pv.n]-=sh; o[cu.n]+=sh;}
    }
    return o;
  }, [proc, sc, yMx, xMx, xMn]);

  const trendBand = useMemo(() => {
    if (!showTrend || vw!=="founding") return null;
    const pts = TREND.filter(t => t.x<=xMx && t.lo>0);
    if (pts.length<2) return null;
    const upper = pts.map(t=>`${xPx(t.x).toFixed(1)},${yPx(t.hi).toFixed(1)}`);
    const lower = [...pts].reverse().map(t=>`${xPx(t.x).toFixed(1)},${yPx(Math.max(t.lo,0.1)).toFixed(1)}`);
    return { band:`M${upper.join("L")}L${lower.join("L")}Z`, med:pts.map((t,i)=>`${i===0?"M":"L"}${xPx(t.x).toFixed(1)},${yPx(t.mid).toFixed(1)}`).join(""), pts };
  }, [showTrend, vw, xMx, yMx, sc]);

  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{display:"block"}} onMouseLeave={()=>{setHov(null);setHovPt(null);setHovTrend(null);}}>
      <defs><clipPath id="plotClip"><rect x={pad.l} y={pad.t} width={pW} height={pH}/></clipPath></defs>      {yTks.map(t=>(<g key={t}><line x1={pad.l} x2={W-pad.r} y1={yPx(t)} y2={yPx(t)} stroke="#E8E6E2" strokeWidth={0.5} strokeDasharray="3,3"/><text x={pad.l-10} y={yPx(t)} textAnchor="end" dominantBaseline="middle" style={{fontSize:10.5,fill:"#bbb",fontFamily:"'JetBrains Mono',monospace"}}>{fv(t)}</text></g>))}
      {xTks.map(t=>(<g key={t}><line x1={xPx(t)} x2={xPx(t)} y1={pad.t} y2={pad.t+pH} stroke="#F0EEEA" strokeWidth={0.4}/><text x={xPx(t)} y={pad.t+pH+18} textAnchor="middle" style={{fontSize:10.5,fill:"#bbb",fontFamily:"'JetBrains Mono',monospace"}}>{vw==="founding"?`Yr ${t}`:t}</text></g>))}
      <text x={pad.l+pW/2} y={H-6} textAnchor="middle" style={{fontSize:11,fill:"#ccc",fontFamily:"'Instrument Sans',sans-serif"}}>{vw==="founding"?"Years from Founding":"Calendar Year"}</text>
      <text x={12} y={pad.t+pH/2} textAnchor="middle" transform={`rotate(-90,12,${pad.t+pH/2})`} style={{fontSize:10,fill:"#ccc",fontFamily:"'Instrument Sans',sans-serif"}}>{isEmp?"Employees":"Revenue ($M)"}</text>

      <g clipPath="url(#plotClip)">
      {trendBand && (<g>
        <path d={trendBand.band} fill="#1a1a1a" opacity={0.06}/>
        <path d={trendBand.med} fill="none" stroke="#1a1a1a" strokeWidth={2.2} strokeDasharray="6,4" opacity={0.22}/>
        {(()=>{const l=trendBand.pts.slice(-1)[0],e=trendBand.pts[Math.min(8,trendBand.pts.length-1)];return l?(<g>
          <text x={xPx(l.x)+6} y={yPx(l.mid)-2} style={{fontSize:9,fill:"#999",fontWeight:500,fontFamily:"'Instrument Sans'"}}>Median</text>
          <text x={xPx(l.x)+6} y={yPx(l.mid)+9} style={{fontSize:7.5,fill:"#bbb",fontFamily:"'JetBrains Mono',monospace"}}>(ex. outliers)</text>
          <text x={xPx(e.x)} y={yPx(e.hi)-6} textAnchor="middle" style={{fontSize:8,fill:"#aaa",fontFamily:"'JetBrains Mono',monospace"}}>75th pct</text>
          <text x={xPx(e.x)} y={yPx(Math.max(e.lo,0.1))+12} textAnchor="middle" style={{fontSize:8,fill:"#aaa",fontFamily:"'JetBrains Mono',monospace"}}>25th pct</text>
        </g>):null})()}
        {trendBand.pts.map(t => {
          const cx=xPx(t.x), halfW=Math.max((pW/(xMx-xMn||1))*0.5, 6);
          return <rect key={t.x} x={cx-halfW} y={pad.t} width={halfW*2} height={pH} fill="transparent"
            onMouseEnter={()=>setHovTrend(t)} onMouseLeave={()=>setHovTrend(null)} style={{cursor:"crosshair"}}/>;
        })}
        {hovTrend&&(()=>{const cx=xPx(hovTrend.x),yLo=yPx(Math.max(hovTrend.lo,0.1)),yHi=yPx(hovTrend.hi),yMd=yPx(hovTrend.mid);
          const tw=150,th=72;let tx=cx+14,ty=yMd-th/2;if(tx+tw>W-pad.r)tx=cx-tw-14;if(ty<pad.t)ty=pad.t+4;if(ty+th>pad.t+pH)ty=pad.t+pH-th-4;
          return(<g>
            <line x1={cx} x2={cx} y1={yHi-4} y2={yLo+4} stroke="#555" strokeWidth={1} strokeDasharray="2,2" opacity={0.5}/>
            <circle cx={cx} cy={yHi} r={3} fill="#888" stroke="#fff" strokeWidth={1}/>
            <circle cx={cx} cy={yMd} r={3.5} fill="#555" stroke="#fff" strokeWidth={1.5}/>
            <circle cx={cx} cy={yLo} r={3} fill="#888" stroke="#fff" strokeWidth={1}/>
            <rect x={tx} y={ty} width={tw} height={th} rx={6} fill="#1a1a1a" opacity={0.94}/>
            <text x={tx+10} y={ty+16} style={{fontSize:10,fill:"#888",fontFamily:"'Instrument Sans'"}}>{`Year ${hovTrend.x} (n=${hovTrend.n||'—'})`}</text>
            <text x={tx+10} y={ty+33} style={{fontSize:10,fill:"#bbb",fontFamily:"'JetBrains Mono',monospace"}}>75th  {fv(hovTrend.hi)}</text>
            <text x={tx+10} y={ty+49} style={{fontSize:11,fill:"#fff",fontWeight:600,fontFamily:"'JetBrains Mono',monospace"}}>Med   {fv(hovTrend.mid)}</text>
            <text x={tx+10} y={ty+65} style={{fontSize:10,fill:"#bbb",fontFamily:"'JetBrains Mono',monospace"}}>25th  {fv(hovTrend.lo)}</text>
          </g>)})()}
      </g>)}

      {proc.map(co => {
        const isHov=hov===co.n, anyHov=!!hov;
        const op=anyHov?(isHov?1:0.07):1, sw=isHov?3.5:anyHov?1.2:2;
        return (<g key={co.n}>
          <path d={path(co.pts)} fill="none" stroke={co.c} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" opacity={op} style={{transition:"opacity 0.4s ease, stroke-width 0.15s"}}/>
          <path d={path(co.pts)} fill="none" stroke="transparent" strokeWidth={18} onMouseEnter={()=>setHov(co.n)} style={{cursor:"pointer"}}/>
          {co.pts.length>0&&(()=>{const visPts=co.pts.filter(p=>p.x>=xMn&&p.x<=xMx&&p.r>0);if(!visPts.length)return null;const l=visPts[visPts.length-1],px=xPx(l.x),py=yPx(l.r),off=lblOff[co.n]||0,lx=px<W-pad.r-60?px+7:px-7,anch=px<W-pad.r-60?"start":"end";return(<g opacity={op} style={{transition:"opacity 0.4s ease"}}><circle cx={px} cy={py} r={2.5} fill={co.c}/>{Math.abs(off)>2&&<line x1={px} y1={py} x2={px+(anch==="start"?4:-4)} y2={py+off} stroke={co.c} strokeWidth={0.6} opacity={0.35}/>}<text x={lx} y={py+off+1} dominantBaseline="middle" textAnchor={anch} style={{fontSize:9,fontWeight:600,fill:co.c,fontFamily:"'Instrument Sans',sans-serif"}}>{co.n}</text></g>)})()}
          {isHov&&co.pts.filter(p=>p.r>0).map((p,i)=>(<circle key={i} cx={xPx(p.x)} cy={yPx(p.r)} r={4} fill="#fff" stroke={co.c} strokeWidth={2} onMouseEnter={()=>setHovPt({...p,company:co.n,color:co.c})} onMouseLeave={()=>setHovPt(null)} style={{cursor:"pointer"}}/>))}
        </g>);
      })}
      </g>{/* end clipPath group */}

      {hovPt&&(()=>{const px=xPx(hovPt.x),py=yPx(hovPt.r),tw=isEmp?170:160,th=48;let tx=px+14,ty=py-th-10;if(tx+tw>W-pad.r)tx=px-tw-14;if(ty<pad.t)ty=py+14;return(<g><rect x={tx} y={ty} width={tw} height={th} rx={6} fill="#1a1a1a" opacity={0.92}/><text x={tx+10} y={ty+17} style={{fontSize:10.5,fill:"#aaa",fontFamily:"'Instrument Sans'"}}>{hovPt.company} · {hovPt.y}</text><text x={tx+10} y={ty+37} style={{fontSize:15,fill:"#fff",fontWeight:600,fontFamily:"'Instrument Sans'"}}>{fv(hovPt.r)}{isEmp?" employees":""}</text></g>)})()}
    </svg>
  );
}

export default function App() {
  const [view, setView] = useState("founding");
  const [scale, setScale] = useState("log");
  const [trend, setTrend] = useState(false);
  const [metric, setMetric] = useState("revenue"); // "revenue" or "employees"
  const [hov, setHov] = useState(null);
  const [hovPt, setHovPt] = useState(null);
  const [hidden, setHidden] = useState(new Set());
  const [xRange, setXRange] = useState(null); // [min, max] or null for auto

  const show = C.filter(co=>!hidden.has(co.n)).map(co=>co.n);
  const togCo = n => setHidden(p=>{const s=new Set(p);s.has(n)?s.delete(n):s.add(n);return s;});
  const togCat = cat => {const cos=C.filter(co=>co.cat===cat);const allH=cos.every(co=>hidden.has(co.n));setHidden(p=>{const s=new Set(p);cos.forEach(co=>{allH?s.delete(co.n):s.add(co.n);});return s;});};

  // Compute full data extent for slider bounds
  const dataExtent = useMemo(() => {
    const vis = C.filter(co=>!hidden.has(co.n));
    let mn=Infinity, mx=-Infinity;
    vis.forEach(co => co.d.forEach(d => {
      const x = view==="founding" ? d.y-co.f : d.y;
      if(x<mn)mn=x; if(x>mx)mx=x;
    }));
    if (trend && view==="founding") TREND.forEach(t => { if(t.x>mx)mx=t.x; });
    return { min: view==="founding"?0:(mn===Infinity?1970:mn), max: mx===-Infinity?2024:mx };
  }, [hidden, view, trend]);

  const btn = on => ({padding:"5px 13px",borderRadius:6,border:"none",fontSize:12,fontWeight:500,cursor:"pointer",fontFamily:"'Instrument Sans',sans-serif",background:on?"#fff":"transparent",color:on?"#1a1a1a":"#999",boxShadow:on?"0 1px 4px rgba(0,0,0,0.1)":"none",transition:"all 0.2s"});

  return (
    <div style={{fontFamily:"'Instrument Sans','Helvetica Neue',sans-serif",background:"#FAF9F6",color:"#1a1a1a",padding:"24px 16px 40px",maxWidth:980,margin:"0 auto"}}>
      <div style={{marginBottom:16}}>
        <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:10,textTransform:"uppercase",letterSpacing:2.5,color:"#bbb",marginBottom:6}}>{metric==="employees"?"Workforce Growth Trajectories":"Revenue Growth Trajectories"}</div>
        <h1 style={{fontFamily:"'Instrument Serif',Georgia,serif",fontSize:36,fontWeight:400,lineHeight:1.1,margin:"0 0 6px",letterSpacing:-0.6,color:"#111"}}>Hardware + Software</h1>
        <p style={{fontSize:14,color:"#999",margin:0}}>39 combined hardware/software businesses · {metric==="employees"?"Annual employee count":"Annual revenue ($M)"} · Log scale</p>
      </div>

      <div style={{display:"flex",gap:10,marginBottom:12,flexWrap:"wrap",alignItems:"center"}}>
        <div style={{display:"flex",background:"#EFEDEA",borderRadius:8,padding:3}}>
          {[{id:"calendar",l:"Calendar Year"},{id:"founding",l:"Years from Founding"}].map(v=><button key={v.id} onClick={()=>{setView(v.id);setXRange(null);}} style={btn(view===v.id)}>{v.l}</button>)}
        </div>
        <div style={{display:"flex",background:"#EFEDEA",borderRadius:8,padding:3}}>
          {[{id:"log",l:"Log Scale"},{id:"linear",l:"Linear"}].map(s=><button key={s.id} onClick={()=>setScale(s.id)} style={btn(scale===s.id)}>{s.l}</button>)}
        </div>
        <div style={{display:"flex",background:"#EFEDEA",borderRadius:8,padding:3}}>
          {[{id:"revenue",l:"Revenue ($M)"},{id:"employees",l:"Employees"}].map(m=><button key={m.id} onClick={()=>setMetric(m.id)} style={btn(metric===m.id)}>{m.l}</button>)}
        </div>
        <button onClick={()=>setTrend(!trend)} style={{
          padding:"5px 13px",borderRadius:6,border:trend?"1px solid #C8C4Be":"1px solid #ddd",
          fontSize:12,fontWeight:500,cursor:"pointer",fontFamily:"'Instrument Sans'",
          background:trend?"#F0EEEB":"#fff",color:trend?"#1a1a1a":"#999",
          opacity:view==="founding"?1:0.35,transition:"all 0.2s",
        }}>{trend?"◼":"◻"} Trend Band</button>
        {hidden.size>0&&<button onClick={()=>setHidden(new Set())} style={{padding:"5px 13px",borderRadius:6,border:"1px solid #ddd",fontSize:12,fontWeight:500,cursor:"pointer",fontFamily:"'Instrument Sans'",background:"#fff",color:"#666"}}>Show All ({C.length-hidden.size}/{C.length})</button>}
      </div>

      {/* X-axis range slider */}
      <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:12,padding:"0 4px"}}>
        <span style={{fontSize:11,color:"#999",fontFamily:"'Instrument Sans'",whiteSpace:"nowrap"}}>X Range</span>
        <span style={{fontSize:11,color:"#666",fontFamily:"'JetBrains Mono',monospace",minWidth:52,textAlign:"right"}}>
          {view==="founding"?`Yr ${xRange?xRange[0]:dataExtent.min}`:`${xRange?xRange[0]:dataExtent.min}`}
        </span>
        {(()=>{
          const lo=xRange?xRange[0]:dataExtent.min, hi=xRange?xRange[1]:dataExtent.max;
          const pct=v=>((v-dataExtent.min)/(dataExtent.max-dataExtent.min||1))*100;
          const handleDrag=(e,which)=>{
            const rect=e.currentTarget.parentElement.getBoundingClientRect();
            const onMove=ev=>{
              const x=Math.max(0,Math.min(1,(ev.clientX-rect.left)/rect.width));
              const val=Math.round(dataExtent.min+x*(dataExtent.max-dataExtent.min));
              setXRange(p=>{
                const cLo=p?p[0]:dataExtent.min, cHi=p?p[1]:dataExtent.max;
                if(which==="lo") return [Math.min(val,cHi-1),cHi];
                return [cLo,Math.max(val,cLo+1)];
              });
            };
            const onUp=()=>{document.removeEventListener("mousemove",onMove);document.removeEventListener("mouseup",onUp);};
            document.addEventListener("mousemove",onMove);
            document.addEventListener("mouseup",onUp);
          };
          return(
            <div style={{position:"relative",flex:1,height:28,display:"flex",alignItems:"center",cursor:"pointer"}}
              onClick={e=>{
                const rect=e.currentTarget.getBoundingClientRect();
                const x=Math.max(0,Math.min(1,(e.clientX-rect.left)/rect.width));
                const val=Math.round(dataExtent.min+x*(dataExtent.max-dataExtent.min));
                const dLo=Math.abs(val-lo), dHi=Math.abs(val-hi);
                setXRange(p=>{
                  const cLo=p?p[0]:dataExtent.min, cHi=p?p[1]:dataExtent.max;
                  if(dLo<=dHi) return [Math.min(val,cHi-1),cHi];
                  return [cLo,Math.max(val,cLo+1)];
                });
              }}>
              <div style={{position:"absolute",left:0,right:0,height:4,background:"#E8E6E2",borderRadius:2}}/>
              <div style={{position:"absolute",height:4,background:"#999",borderRadius:2,left:`${pct(lo)}%`,right:`${100-pct(hi)}%`}}/>
              <div onMouseDown={e=>{e.stopPropagation();handleDrag(e,"lo");}} style={{position:"absolute",width:16,height:16,borderRadius:8,background:"#fff",border:"2px solid #888",boxShadow:"0 1px 3px rgba(0,0,0,0.18)",left:`calc(${pct(lo)}% - 8px)`,cursor:"grab",zIndex:5}}/>
              <div onMouseDown={e=>{e.stopPropagation();handleDrag(e,"hi");}} style={{position:"absolute",width:16,height:16,borderRadius:8,background:"#fff",border:"2px solid #888",boxShadow:"0 1px 3px rgba(0,0,0,0.18)",left:`calc(${pct(hi)}% - 8px)`,cursor:"grab",zIndex:5}}/>
            </div>
          );
        })()}
        <span style={{fontSize:11,color:"#666",fontFamily:"'JetBrains Mono',monospace",minWidth:52}}>
          {view==="founding"?`Yr ${xRange?xRange[1]:dataExtent.max}`:`${xRange?xRange[1]:dataExtent.max}`}
        </span>
        {xRange&&<button onClick={()=>setXRange(null)} style={{padding:"3px 9px",borderRadius:5,border:"1px solid #ddd",fontSize:10.5,fontWeight:500,cursor:"pointer",fontFamily:"'Instrument Sans'",background:"#fff",color:"#888"}}>Reset</button>}
      </div>

      <div style={{background:"#fff",borderRadius:14,border:"1px solid #E8E6E3",padding:"12px 8px 8px",boxShadow:"0 2px 16px rgba(0,0,0,0.04)",marginBottom:16}}>
        <Chart show={show} viewMode={view} scaleMode={scale} hov={hov} setHov={setHov} hovPt={hovPt} setHovPt={setHovPt} showTrend={trend&&view==="founding"&&metric==="revenue"} xRange={xRange} metric={metric}/>
      </div>

      <div style={{display:"flex",gap:4,marginBottom:14,flexWrap:"wrap"}}>
        {CATEGORIES.map(cat=>{const cos=C.filter(co=>co.cat===cat),vis=cos.filter(co=>!hidden.has(co.n)).length;return(
          <button key={cat} onClick={()=>togCat(cat)} style={{padding:"4px 10px",borderRadius:5,border:"1px solid #ddd",fontSize:10.5,fontWeight:500,cursor:"pointer",fontFamily:"'Instrument Sans'",background:vis===cos.length?"#F0EEEB":"#fff",color:vis>0?"#555":"#bbb",opacity:vis>0?1:0.5,transition:"all 0.15s"}}>{cat} ({vis}/{cos.length})</button>
        );})}
      </div>

      <div>
        {CATEGORIES.filter(cat=>C.some(co=>co.cat===cat)).map(cat=>(
          <div key={cat} style={{marginBottom:6}}>
            <div style={{fontSize:9,fontWeight:600,color:"#bbb",textTransform:"uppercase",letterSpacing:1,marginBottom:2,paddingLeft:3,cursor:"pointer"}} onClick={()=>togCat(cat)}>{cat}</div>
            <div style={{display:"flex",flexWrap:"wrap",gap:2}}>
              {C.filter(co=>co.cat===cat).map(co=>{const h=hidden.has(co.n);return(
                <div key={co.n} style={{display:"flex",alignItems:"flex-start",gap:5,padding:"4px 8px",borderRadius:7,background:hov===co.n?"#F0EEEB":"transparent",cursor:"pointer",transition:"background 0.15s,opacity 0.15s",opacity:h?0.25:hov&&hov!==co.n?0.35:1,minWidth:155,maxWidth:210}} onClick={()=>togCo(co.n)} onMouseEnter={()=>!h&&setHov(co.n)} onMouseLeave={()=>setHov(null)}>
                  <div style={{width:9,height:9,borderRadius:3,background:h?"#ccc":co.c,marginTop:2,flexShrink:0}}/>
                  <div style={{minWidth:0}}>
                    <div style={{fontSize:11.5,fontWeight:600,textDecoration:h?"line-through":"none",color:h?"#aaa":"#1a1a1a"}}>{co.n}</div>
                    <div style={{fontSize:9.5,color:"#999",lineHeight:1.3}}>{co.t} · {co.f}{co.note&&<span style={{fontStyle:"italic"}}> · {co.note}</span>}</div>
                    <div style={{fontSize:9.5,color:"#777",fontFamily:"'JetBrains Mono',monospace",marginTop:1}}>{metric==="employees"?(co.e&&co.e.length?fmtE(co.e[co.e.length-1].e)+" emp ("+co.e[co.e.length-1].y+")":"no emp data"):fmt(co.d[co.d.length-1].r)+" ("+co.d[co.d.length-1].y+")"}</div>
                  </div>
                </div>
              );})}
            </div>
          </div>
        ))}
      </div>

      <div style={{marginTop:20,padding:"14px 18px",background:"#F0EEEB",borderRadius:10,fontSize:11,lineHeight:1.6,color:"#aaa"}}>
        <strong style={{color:"#999"}}>Trend band</strong> (toggle above): 25th–75th percentile of revenue by years from founding, excluding NVIDIA, Tesla, SpaceX. Computed in log-space with 3-point moving average smoothing, years with N≥4. Dashed line = median. Based on 671 data points: the median hardware company does ~$3M at year 2, ~$27M by year 5, ~$100M by year 7, ~$300M by year 10, and crosses ~$1B around year 16 — then plateaus around $2–3B.
        <br/><br/>
        <strong style={{color:"#999"}}>Early data</strong>: Pre-IPO revenue from SEC S-1/F-1 filings, press reports, Wikipedia, Speedwell Research, CNBC. AMD 1971–99 from Wikipedia + FundingUniverse + Encyclopedia.com ($4.6M in 1971, $26.5M in 1974). Cognex 1988 from Encyclopedia.com ($10.6M). Mobileye 2008–13 from F-1 filing via Seeking Alpha ($5M→$81M). Garmin 1991–94 estimated from FundingUniverse (first product 1991, $102M by 1995). Penumbra 2007–12 estimated from S-1 trajectory (first revenue 2007, profitable 2009, $88.8M by 2013). Arista 2008–09 estimated from S-1 ($72M by 2010). Bloom Energy 2014–18 from StockAnalysis/SEC ($248M in 2014, declined to $173M in 2015). Keyence 1997–2010 from IPO filing + DCFmodeling. Planet Labs 2015–20 backcast from SPAC filing. Shield AI 2019–22 estimated from contract announcements. Qualcomm $32M in 1989 (Wikipedia), 1994–2024 from WallStreetZen. Ubiquiti FY2008–25 from StockAnalysis (bootstrapped, FY ends June). Tandem Diabetes 2012–24 from StockAnalysis ($2.5M→$940M). AeroVironment FY2004–06 backcast from S-1 (121% + 33% growth rates), FY2006–24 from StockAnalysis. Roku 2015–16 from S-1 ($320M/$399M). Rivian $0 pre-2021. Generac private until 2010.
        <br/><br/>
        <strong style={{color:"#999"}}>Sources:</strong> SEC filings, Sacra, Contrary Research, StockAnalysis, WallStreetZen, Yahoo Finance. Employee counts from SEC 10-K filings via StockAnalysis; private cos (SpaceX, DJI, Anduril, Shield AI, Lumafield) from PitchBook, Tracxn, news reports. SpaceX, Anduril, Shield AI & DJI revenue are estimates. NVIDIA FY (ends Jan) mapped to prior CY. Keyence JPY→USD. Ubiquiti FY ends Jun. AeroVironment FY ends Apr.
      </div>
    </div>
  );
}
