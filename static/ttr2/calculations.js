//#region start data

var x_longeur = 0;
var x_points = 0;
var x_liens = 0;
var x_planned_vs_set_status = 'OK'

let selected_tracks = new Set([]);

let left_colors = {}; // To reflect used cards for color tracks and locos there
let last_locos_to_use = 0;

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

const combined_colors_labels = ['13', '14', '18', '25', '28', '45', '47', '56']

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

function f_toggle_link(id, _lng, skipVerification = false) {
  var rail_obj = document.getElementById('rail_' + id);
  if (rail_obj.style.visibility == 'visible') {
    rail_obj.style.visibility = 'hidden';
    f_info_actu(id, -1, skipVerification);
  } else {
    rail_obj.style.visibility = 'visible';
    f_info_actu(id, +1, skipVerification);
  }
  f_refresh_simulation_stats_ui();
}

const f_fetch_used_colors_from_ui = () => {
  const to_use_inputs = document.forms.usedColorsForm.querySelectorAll('input')
  to_use_inputs.forEach(({ name, value }) => {
    if (!name.includes('txt_to_use_')) return;

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

function f_copy_link() {
  const new_search_params = new URLSearchParams({ tracks: Array.from(selected_tracks) }).toString().replaceAll('%2C', ',');
  navigator.clipboard.writeText(`${document.location.origin}/${window.location.pathname}?${new_search_params}`)
}

function f_refresh_left_colors_ui() {
  if (x_planned_vs_set_status !== 'OK') return f_cleanup_left_colors_ui();

  // show loco # from simulation, but it can be wrong, as multiple valid combination can require less locos
  let locomotive_left_caption = last_locos_to_use

  const multiColorUsed = combined_colors_labels.some((color) => used_colors[color] > 0) && !f_all_multicolors_selected_manually()
  if (multiColorUsed) locomotive_left_caption += " ?"
  document.getElementById('leftColors0').innerHTML = locomotive_left_caption

  Object.keys(used_colors).forEach(key => {
    if ([...combined_colors_labels, '0'].includes(key)) return;

    // I decided to show just simple diff, without applying 1 possible solution of multiple multiColor tracks
    // document.getElementById('leftColors' + key).innerHTML = left_colors[key] || 0
    document.getElementById('leftColors' + key).innerHTML = to_use_colors[key] - used_colors[key];
  });
  document.getElementById('multiColorInfo').innerHTML =
    multiColorUsed ? "if combined color track in use then Locomotive number can be suboptimal. Choose color with button" : "";
}

function f_cleanup_left_colors_ui() {
  document.getElementById('leftColors0').innerHTML = '-'

  Object.keys(used_colors).forEach(key => {
    if ([...combined_colors_labels, '0'].includes(key)) return;

    document.getElementById('leftColors' + key).innerHTML = '-'
  });
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
  f_refresh_left_colors_ui();
}

function f_update_to_use_colors_status() {
  document.getElementById('txt_to_use_colors_status').value = x_planned_vs_set_status;
}

function f_show_only_used_combined_colors() {
  combined_colors_labels.forEach((combined_color) =>
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

function f_info_actu(id, sig, skipVerification = false) {
  var link = link_data[id]

  used_colors[link.colors] += sig * link.length

  if (sig > 0) selected_tracks.add(id)
  else selected_tracks.delete(id);

  x_longeur += sig * link.length;
  x_points += sig * length_points_mapping[link.length];
  x_liens += sig;
  if (!skipVerification) f_estimate_needed_colors();
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

//#region estimating colors capacity

function generateCombinedColorsPermutations(arrays) {
  if (arrays.length === 0) return [];

  // Use reduce to accumulate combinations
  return arrays.reduce((acc, currentArray) => {
      return acc.flatMap(accElement =>
          currentArray.map(currentElement =>
              [...accElement, currentElement]
          )
      );
  }, [[]]);
}

const f_all_multicolors_selected_manually = () =>
  combined_colors_labels.every(id => (used_colors[id] || 0) === 0 || (selectedMultiColors[id] || 0) !== 0);

const f_prepare_used_colors_with_selected = (combined_color_tracks_with_length) => {
  const used_colors_with_multi_selected = {...used_colors}

  combined_color_tracks_with_length.forEach((single_mapping) => {
    for (let [used_color_label, trainNumber] of Object.entries(single_mapping)) {
      let chosenColor = selectedMultiColors[used_color_label] || 0
      if (chosenColor !== 0) {
        used_colors_with_multi_selected[chosenColor] += trainNumber
        used_colors_with_multi_selected[used_color_label] = 0
      }
    }
  })

  return used_colors_with_multi_selected;
}

const f_estimate_needed_colors = () => {
  const whole_cards_number = Object.values(to_use_colors).reduce((sum, x) => sum + x, 0)
  if (whole_cards_number < x_longeur) return x_planned_vs_set_status = 'TooLong'

  let {'0': locomotives_to_use, ...to_use_only_colors} = to_use_colors;

  if (combined_colors_labels.every(id => used_colors[id] === 0))
    return f_validate_needed_colors(to_use_only_colors, locomotives_to_use, used_colors);

  let combined_color_tracks_with_length = combined_colors_labels.flatMap(
    (combined_colors) => Array.from(selected_tracks).filter(
      (id) => link_data[id].colors == combined_colors
    ).map(
      (id) => { return { [`${combined_colors}`]: link_data[id].length }}
    )
  );

  const with_selection_used_colors = f_prepare_used_colors_with_selected(combined_color_tracks_with_length)

  if (f_all_multicolors_selected_manually()) {
    return f_validate_needed_colors(to_use_only_colors, locomotives_to_use, with_selection_used_colors);
  }

  generateCombinedColorsPermutations(
    Object.values(combined_color_tracks_with_length).filter(
      mapping => (selectedMultiColors[Object.keys(mapping)[0]] || 0) === 0
    ).flatMap(
      values => Object.keys(values)
    ).map(
      (combined_label) => combined_label.split('')
    )
  ).some((selected_colors_a) => {
    const manipulated_used_colors = { ...with_selection_used_colors };

    selected_colors_a.forEach((color, index) =>
      manipulated_used_colors[color] =
        manipulated_used_colors[color] +  Object.values(Object.values(combined_color_tracks_with_length)[index])[0]
    )

    f_validate_needed_colors(to_use_only_colors, locomotives_to_use, manipulated_used_colors);

    return x_planned_vs_set_status == 'OK'
  });
}

const f_validate_needed_colors = (to_use_only_colors, locomotives_to_use, manipulated_used_colors) => {
  let simple_color_diffs = Object.fromEntries(Object.entries(to_use_only_colors).map(
    ([color, set]) => [color, set - manipulated_used_colors[color]]
  ));
  let needed_locos_for_color_link = [0, ...Object.values(simple_color_diffs)].reduce((sum, x) => x < 0 ? sum - x : sum)

  locomotives_to_use -= needed_locos_for_color_link

  if (locomotives_to_use < 0) return x_planned_vs_set_status = 'BAD LOCOS'

  last_locos_to_use = locomotives_to_use
  left_colors = Object.fromEntries(
    Object.keys(simple_color_diffs).filter(
      (key) => simple_color_diffs[key] > 0
    ).map((key) => [key, simple_color_diffs[key]])
  )

  let colors_available_for_any_sum = Object.values(left_colors).reduce((sum, x) => sum + x, 0)

  any_color_requested = manipulated_used_colors['0']

  // fast pre-check
  if (colors_available_for_any_sum + locomotives_to_use < any_color_requested) return x_planned_vs_set_status = 'BAD'

  // REAL VALIDATION
  // cannot split 3 red + 1 white into two links 2x
  const any_routes = Array.from(selected_tracks).filter(id => link_data[id]['colors'] == '0').map(id => link_data[id]['length'])
  if (!verifyAnyTracksWithColors(left_colors, any_routes, locomotives_to_use)) return x_planned_vs_set_status = 'ANY FAILED'

  x_planned_vs_set_status = 'OK'
}

// Helper functions
function selectPossibleParts(partsArray, routeArray) {
  return Array.from(
    new Set(
      partsArray
        .map((parts) => {
          const commonLengths = parts.filter((part) => routeArray.includes(part));
          return commonLengths.length > 0 ? commonLengths : null;
        })
        .filter((item) => item !== null)
    )
  );
}

// Partitioning function
function jsPartitionIntoParts(n, max = n - 1) {
  if (n === 0) return [[]];

  return Array.from({ length: Math.min(n, max) }, (_, i) => i + 1).flatMap((i) => {
    const partitions = jsPartitionIntoParts(n - i, i);
    return partitions.map((p) => [i, ...p]);
  });
}

// Main verification functions
function verifyAnyTracksWithColors(colors, routes, locomotives_to_use) {
  const colorValues = Object.values(colors);
  return verifyColorsAndLocos(colorValues.sort((a, b) => b - a), routes.sort((a, b) => b - a), locomotives_to_use);
}

// failing test example:
// file:///Users/piotrwasiak/Code/opensource/TTR%20Simulations/TTRsimulations.html?tracks=76,02,13&0=2&1=5&2=0&3=0&4=0&5=0&6=0&7=4&8=4

// MultiColor fixed:
// file:///Users/piotrwasiak/Code/opensource/TTR%20Simulations/TTRsimulations.html?tracks=11,76,16&0=2&1=5&2=0&3=0&4=0&5=0&6=0&7=4&8=4
// file:///Users/piotrwasiak/Code/opensource/TTR%20Simulations/TTRsimulations.html?tracks=65,49,77&0=0&1=0&2=0&3=0&4=0&5=5&6=0&7=4&8=0
// file:///Users/piotrwasiak/Code/opensource/TTR%20Simulations/TTRsimulations.html?tracks=76,02,41,37,03,65,57,40,38,67,60,36,09,39&0=7&1=6&2=4&3=2&4=7&5=5&6=4&7=6&8=4

function verifyColorsAndLocos(colorValues, routes, locos) {
  last_locos_to_use = locos;
  reduceIdeals(colorValues, routes);
  if (routes.length === 0) return true;

  if (!colorValues.length) {
    if (locos === 0) return false;

    return verifyColorsAndLocos([locos], [...routes], 0);
  }

  const [currentMax, ...otherColors] = colorValues;

  const validParts = selectPossibleParts(jsPartitionIntoParts(currentMax), [...routes])
    .sort((a, b) => b.length - a.length)
    .some((partColors) => {
      const newColors = [...partColors, ...otherColors].sort((a, b) => b - a);
      if (newColors.filter(p => p === 1).length > 5) return false // it seems to be reasonable, but slows down

      return verifyColorsAndLocos(newColors, [...routes], locos);
    });

  if (validParts) return true;

  if (locos > 0) {
    const newColors = [currentMax + 1, ...otherColors];
    last_locos_to_use -= 1
    return verifyColorsAndLocos(newColors, [...routes], locos - 1);
  }

  if (otherColors.length > 0) {
    return verifyColorsAndLocos(otherColors, [...routes], locos);
  }

  return false;
}

function reduceIdeals(colorValues, routes) {
  for (let i = colorValues.length - 1; i >= 0; i--) {
    const colorValue = colorValues[i];
    const index = routes.indexOf(colorValue);

    if (index !== -1) {
      routes.splice(index, 1);
      colorValues.splice(i, 1);
    }
  }
}

const selectedMultiColors = {};

const f_select_multiple_color = (combinedColorInt, selectedColorInt) => {
  selectedMultiColors[combinedColorInt.toString()] = selectedColorInt;
  f_estimate_needed_colors();
  f_update_to_use_colors_status();
  f_refresh_left_colors_ui();
}

//#endregion

const f_localstore_colors_set = () => {
  localStorage.setItem(
    "to_use_colors",
    JSON.stringify(to_use_colors)
  );
}

const f_init_selected_tracks = () => {
  let searchParams = new URLSearchParams(window.location.search);

  selected_tracks = new Set((searchParams.get('tracks') || '').split(','));

  if (selected_tracks.has('')) return selected_tracks = new Set([]);

  selected_tracks.forEach((id) => f_toggle_link(id, 0, true));
  f_estimate_needed_colors(); // Estimate manually after finishing selecting tracks to do it faster
}

const f_init_colors_set = () => {
  let searchParams = new URLSearchParams(window.location.search);

  let first_colors_key = searchParams.keys().next().value
  if (first_colors_key === 'tracks') {
    first_colors_key = searchParams.size === 1 ? false : searchParams.keys().next().value
  }

  if (first_colors_key) return f_setup_from_url_params(searchParams)

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
  f_init_selected_tracks();
  f_show_only_used_combined_colors();
  f_refresh_left_colors_ui();
  f_update_to_use_colors_status();
}, 50);

//#endregion