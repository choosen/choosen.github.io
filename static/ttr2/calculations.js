//#region start data

var x_longeur = 0;
var x_points = 0;
var x_liens = 0;
var x_planned_vs_set_status = 'OK'

const used_colors = {
  '0': 0, // everything
  '1': 0, // "Pink"
  '2': 0, // "White"
  '3': 0, // "Blue"
  '4': 0, // "Yellow"
  '5': 0, // "Orange"
  '6': 0, // "Black"
  '7': 0, // "Red"
  '8': 0, // "Green"
  "13": 0, // Pink/Blue
  "14": 0, // Pink/Yellow
  "18": 0, // Pink/Green
  "25": 0, // White/Orange
  "28": 0, // White/Green
  "45": 0, // Yellow/Orange   45 means 4 or 5, so
  "47": 0, // Yellow/Red
  "56": 0 // Orange/Black
}

const link_data = {
  "01": {
    "colors": "5",
    "cities": "Duluth-Helena",
    "length": 6
  },
  "02": {
    "colors": "47",
    "cities": "Denver-Salt Lake City",
    "length": 3
  },
  "03": {
    "colors": "25",
    "cities": "Salt Lake City-San Francisco",
    "length": 5
  },
  "04": {
    "colors": "0",
    "cities": "Las Vegas-Los Angeles",
    "length": 2
  },
  "05": {
    "colors": "5",
    "cities": "Las Vegas-Salt Lake City",
    "length": 3
  },
  "06": {
    "colors": "0",
    "cities": "Portland-Seattle",
    "length": 1
  },
  "07": {
    "colors": "0",
    "cities": "Seattle-Vancouver",
    "length": 1
  },
  "08": {
    "colors": "0",
    "cities": "Calgary-Vancouver",
    "length": 3
  },
  "09": {
    "colors": "0",
    "cities": "Sault St. Marie-Winnipeg",
    "length": 6
  },
  "10": {
    "colors": "4",
    "cities": "Helena-Seattle",
    "length": 6
  },
  "11": {
    "colors": "1",
    "cities": "Duluth-Toronto",
    "length": 6
  },
  "12": {
    "colors": "7",
    "cities": "Helena-Omaha",
    "length": 5
  },
  "13": {
    "colors": "8",
    "cities": "Pittsburgh-Saint Louis",
    "length": 5
  },
  "14": {
    "colors": "3",
    "cities": "Atlanta-Miami",
    "length": 5
  },
  "15": {
    "colors": "0",
    "cities": "Calgary-Helena",
    "length": 4
  },
  "16": {
    "colors": "8",
    "cities": "Denver-Helena",
    "length": 4
  },
  "17": {
    "colors": "3",
    "cities": "Helena-Winnipeg",
    "length": 4
  },
  "18": {
    "colors": "6",
    "cities": "Duluth-Winnipeg",
    "length": 4
  },
  "19": {
    "colors": "3",
    "cities": "Oklahoma City-Santa Fe",
    "length": 3
  },
  "20": {
    "colors": "0",
    "cities": "Phoenix-Santa Fe",
    "length": 3
  },
  "21": {
    "colors": "0",
    "cities": "El Paso-Phoenix",
    "length": 3
  },
  "22": {
    "colors": "1",
    "cities": "Helena-Salt Lake City",
    "length": 3
  },
  "23": {
    "colors": "3",
    "cities": "Montréal-New York",
    "length": 3
  },
  "24": {
    "colors": "8",
    "cities": "Little Rock-New Orleans",
    "length": 3
  },
  "25": {
    "colors": "0",
    "cities": "Duluth-Sault St. Marie",
    "length": 3
  },
  "26": {
    "colors": "0",
    "cities": "Atlanta-Charleston",
    "length": 2
  },
  "27": {
    "colors": "0",
    "cities": "Atlanta-Raleigh",
    "length": 2
  },
  "28": {
    "colors": "0",
    "cities": "Nashville-Saint Louis",
    "length": 2
  },
  "29": {
    "colors": "0",
    "cities": "Little Rock-Saint Louis",
    "length": 2
  },
  "30": {
    "colors": "0",
    "cities": "Dallas-Little Rock",
    "length": 2
  },
  "31": {
    "colors": "0",
    "cities": "Houston-New Orleans",
    "length": 2
  },
  "32": {
    "colors": "0",
    "cities": "Raleigh-Pittsburgh",
    "length": 2
  },
  "33": {
    "colors": "0",
    "cities": "Pittsburgh-Washington",
    "length": 2
  },
  "34": {
    "colors": "0",
    "cities": "Raleigh-Washington",
    "length": 2
  },
  "35": {
    "colors": "0",
    "cities": "Boston-Montréal",
    "length": 2
  },
  "36": {
    "colors": "47",
    "cities": "Boston-New York",
    "length": 2
  },
  "37": {
    "colors": "56",
    "cities": "New York-Washington",
    "length": 2
  },
  "38": {
    "colors": "28",
    "cities": "New York-Pittsburgh",
    "length": 2
  },
  "39": {
    "colors": "0",
    "cities": "Sault St. Marie-Toronto",
    "length": 2
  },
  "40": {
    "colors": "28",
    "cities": "Chicago-Saint Louis",
    "length": 2
  },
  "41": {
    "colors": "13",
    "cities": "Kansas City-Saint Louis",
    "length": 2
  },
  "42": {
    "colors": "0",
    "cities": "Duluth-Omaha",
    "length": 2
  },
  "43": {
    "colors": "0",
    "cities": "Kansas City-Oklahoma City",
    "length": 2
  },
  "44": {
    "colors": "0",
    "cities": "Little Rock-Oklahoma City",
    "length": 2
  },
  "45": {
    "colors": "0",
    "cities": "Dallas-Oklahoma City",
    "length": 2
  },
  "46": {
    "colors": "0",
    "cities": "Denver-Santa Fe",
    "length": 2
  },
  "47": {
    "colors": "0",
    "cities": "El Paso-Santa Fe",
    "length": 2
  },
  "48": {
    "colors": "0",
    "cities": "Toronto-Pittsburgh",
    "length": 2
  },
  "49": {
    "colors": "0",
    "cities": "Kansas City-Omaha",
    "length": 1
  },
  "50": {
    "colors": "0",
    "cities": "Atlanta-Nashville",
    "length": 1
  },
  "51": {
    "colors": "0",
    "cities": "Dallas-Houston",
    "length": 1
  },
  "52": {
    "colors": "0",
    "cities": "Los Angeles-Phoenix",
    "length": 3
  },
  "53": {
    "colors": "2",
    "cities": "Little Rock-Nashville",
    "length": 3
  },
  "54": {
    "colors": "6",
    "cities": "Nashville-Raleigh",
    "length": 3
  },
  "55": {
    "colors": "7",
    "cities": "Dallas-El Paso",
    "length": 4
  },
  "56": {
    "colors": "0",
    "cities": "Montréal-Toronto",
    "length": 3
  },
  "57": {
    "colors": "56",
    "cities": "Chicago-Pittsburgh",
    "length": 3
  },
  "58": {
    "colors": "7",
    "cities": "Chicago-Duluth",
    "length": 3
  },
  "59": {
    "colors": "0",
    "cities": "Charleston-Raleigh",
    "length": 2
  },
  "60": {
    "colors": "14",
    "cities": "Los Angeles-San Francisco",
    "length": 3
  },
  "61": {
    "colors": "6",
    "cities": "El Paso-Los Angeles",
    "length": 6
  },
  "62": {
    "colors": "8",
    "cities": "El Paso-Houston",
    "length": 6
  },
  "63": {
    "colors": "2",
    "cities": "Calgary-Winnipeg",
    "length": 6
  },
  "64": {
    "colors": "3",
    "cities": "Portland-Salt Lake City",
    "length": 6
  },
  "65": {
    "colors": "56",
    "cities": "Denver-Kansas City",
    "length": 4
  },
  "66": {
    "colors": "1",
    "cities": "Denver-Omaha",
    "length": 4
  },
  "67": {
    "colors": "45",
    "cities": "Atlanta-New Orleans",
    "length": 4
  },
  "68": {
    "colors": "1",
    "cities": "Charleston-Miami",
    "length": 4
  },
  "69": {
    "colors": "7",
    "cities": "Miami-New Orleans",
    "length": 6
  },
  "70": {
    "colors": "2",
    "cities": "Denver-Phoenix",
    "length": 5
  },
  "71": {
    "colors": "4",
    "cities": "El Paso-Oklahoma City",
    "length": 5
  },
  "72": {
    "colors": "4",
    "cities": "Nashville-Pittsburgh",
    "length": 4
  },
  "73": {
    "colors": "3",
    "cities": "Chicago-Omaha",
    "length": 4
  },
  "74": {
    "colors": "6",
    "cities": "Montréal-Sault St. Marie",
    "length": 5
  },
  "75": {
    "colors": "7",
    "cities": "Denver-Oklahoma City",
    "length": 4
  },
  "76": {
    "colors": "18",
    "cities": "Portland-San Francisco",
    "length": 5
  },
  "77": {
    "colors": "0",
    "cities": "Calgary-Seattle",
    "length": 4
  },
  "78": {
    "colors": "2",
    "cities": "Chicago-Toronto",
    "length": 4
  }
}
//#endregion

//#region UI action

function f_toggle_link(id, _lng) {
  var rail_obj = document.getElementById('rail_' + id);
  if (rail_obj.style.visibility == 'visible') {
    rail_obj.style.visibility = 'hidden';
    f_info_actu(id, -1);
  } else {
    rail_obj.style.visibility = 'visible';
    f_info_actu(id, +1);
  }
  f_refresh_simulation_stats_ui();
}

const f_fetch_used_colors_from_ui = () => {
  const to_use_inputs = document.forms.usedColorsForm.querySelectorAll('input')
  to_use_inputs.forEach(({ name, value }) => {
    unified_name = name.replace('txt_to_use_', '')
    to_use_colors[unified_name] = parseInt(value || 0)
  });
  f_refresh_set_sum();
  f_estimate_needed_colors();
  f_update_to_use_colors_status();
}

function f_cleanup_routes() {
  const new_search_params = new URLSearchParams(to_use_colors).toString();
  window.location.search = `?${new_search_params}`;
}

function f_refresh_simulation_stats_ui() {
  document.getElementById('txt_longueur').value = x_longeur;
  document.getElementById('txt_points').value = x_points;
  document.getElementById('txt_liens').value = x_liens;

  Object.keys(used_colors).forEach(key => {
    document.getElementById('usedColors' + key).innerHTML = used_colors[key] == 0 ? '' : used_colors[key]
  });

  f_update_to_use_colors_status();
  f_show_only_used_combined_colors();
  f_refresh_set_sum();
}

function f_update_to_use_colors_status() {
  document.getElementById('txt_to_use_colors_status').value = x_planned_vs_set_status;
}

function f_show_only_used_combined_colors() {
  ['13', '14', '18', '25', '28', '45', '47', '56'].forEach((combined_color) =>
    document.getElementById('usedColors' + combined_color).parentNode.style.display = used_colors[combined_color] === 0 ? 'none' : ''
  )
}

function f_sync_ui_set_colors() {
  Object.keys(to_use_colors).forEach(key =>
    document.getElementById('txt_to_use_' + key).value = to_use_colors[key]
  );
  f_refresh_set_sum();
}

function f_refresh_set_sum() {
  const to_use_colors_sum = Object.values(to_use_colors).reduce((sum, x) => sum + x, 0)
  document.getElementById('set_sum').innerHTML = to_use_colors_sum
};

//#endregion

//#region Logic

const length_points_mapping = {
  1: 1,
  2: 2,
  3: 4,
  4: 7,
  5: 10,
  6: 15,
}

function f_info_actu(id, sig) {
  var link = link_data[id]

  used_colors[link.colors] += sig * link.length

  x_longeur += sig * link.length;
  x_points += sig * length_points_mapping[link.length];
  x_liens += sig;
  f_estimate_needed_colors();
}

let to_use_colors = {
  '0': 0, // everything
  '1': 0, // "Pink"
  '2': 0, // "White"
  '3': 0, // "Blue"
  '4': 0, // "Yellow"
  '5': 0, // "Orange"
  '6': 0, // "Black"
  '7': 0, // "Red"
  '8': 0, // "Green"
}

const f_estimate_needed_colors = () => {
  const whole_cards_number = Object.values(to_use_colors).reduce((sum, x) => sum + x, 0)
  if (whole_cards_number < x_longeur) return x_planned_vs_set_status = 'TooLong'

  let {'0': locomotives_to_use, ...rest} = to_use_colors
  let simple_color_diffs = Object.fromEntries(Object.entries(rest).map(
    ([color, set]) => [color, set - used_colors[color]]
  ));
  let needed_locos_for_color_link = [0, ...Object.values(simple_color_diffs)].reduce((sum, x) => x < 0 ? sum - x : sum)

  locomotives_to_use -= needed_locos_for_color_link

  if (locomotives_to_use < 0) return x_planned_vs_set_status = 'BAD LOCOS'

  let left_colors = Object.fromEntries(
    Object.keys(simple_color_diffs).filter(
      (key) => simple_color_diffs[key] > 0
    ).map((key) => [key, simple_color_diffs[key]])
  )

  let colors_available_for_any_sum = Object.values(left_colors).reduce((sum, x) => sum + x, 0)

  any_color_requested = used_colors['0']

  // fast check, but I have to
  // TODO: care about fiting the right color amount for each track
  // cannot split 3 red + 1 white into two links 2x
  if (colors_available_for_any_sum + locomotives_to_use < any_color_requested) return x_planned_vs_set_status = 'BAD'

  if (colors_available_for_any_sum < any_color_requested) locomotives_to_use -= any_color_requested - colors_available_for_any_sum

  // TODO: calculate if it is possible to make the combined route
  x_planned_vs_set_status = 'OK'
}

const f_localstore_colors_set = () => {
  localStorage.setItem(
    "to_use_colors",
    JSON.stringify(to_use_colors)
  );
}

const f_init_colors_set = () => {
  let searchParams = new URLSearchParams(window.location.search);

  if (searchParams.keys().next().value) return f_setup_from_url_params(searchParams)

  let stored_json = localStorage.getItem("to_use_colors") || '';

  if (!stored_json) return f_setup_example_colors_set();

  to_use_colors = JSON.parse(stored_json)

  f_sync_ui_set_colors();
};

const f_setup_from_url_params = (searchParams) => {
  to_use_colors['0'] = parseInt(searchParams.get('0') || '0');
  to_use_colors['1'] = parseInt(searchParams.get('1') || '0');
  to_use_colors['2'] = parseInt(searchParams.get('2') || '0');
  to_use_colors['3'] = parseInt(searchParams.get('3') || '0');
  to_use_colors['4'] = parseInt(searchParams.get('4') || '0');
  to_use_colors['5'] = parseInt(searchParams.get('5') || '0');
  to_use_colors['6'] = parseInt(searchParams.get('6') || '0');
  to_use_colors['7'] = parseInt(searchParams.get('7') || '0');
  to_use_colors['8'] = parseInt(searchParams.get('8') || '0');

  f_sync_ui_set_colors();
}

document.addEventListener('paste', e=>{
  let content = e.clipboardData.getData('text/plain');
  content.split("\n").forEach((line, index) =>
    to_use_colors[index.toString()] = parseInt(line)
  );
  f_sync_ui_set_colors();
})

const f_paste_color_set = () => {
  alert('here we are:' + clipboardData);
};

const f_setup_example_colors_set = () => {
  to_use_colors['0'] = 6
  to_use_colors['1'] = 6
  to_use_colors['2'] = 4
  to_use_colors['3'] = 4
  to_use_colors['4'] = 6
  to_use_colors['5'] = 6
  to_use_colors['6'] = 4
  to_use_colors['7'] = 4
  to_use_colors['8'] = 4

  f_sync_ui_set_colors();
};

// wait for rendering UI to refresh it
setTimeout(() => {
  f_init_colors_set()
  f_show_only_used_combined_colors();
}, 50);

//#endregion