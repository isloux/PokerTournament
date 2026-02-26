use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = Date)]
    fn now() -> f64;
}

#[wasm_bindgen]
pub struct TickResult {
    pub remaining: i32,
    pub time_remaining_at_start: i32,
    pub current_level_index: u32,
    pub start_timestamp: f64,
    pub finished: bool,
    pub level_changed: bool,
    pub play_audio: i32, // 0: none, 1: break_end, 2: round_end
}

#[wasm_bindgen]
pub fn process_tick(
    mut start_timestamp: f64,
    mut current_level_index: u32,
    time_remaining_at_start: i32,
    structure_durations: &[i32],
    structure_types_is_break: &[u8], // 0 = round, 1 = break
) -> TickResult {
    let now = now();
    let elapsed_seconds = ((now - start_timestamp) / 1000.0).floor() as i32;
    let mut remaining = time_remaining_at_start - elapsed_seconds;
    let mut play_audio = 0;
    let mut level_changed = false;
    let mut new_time_remaining_at_start = time_remaining_at_start;
    let len = structure_durations.len();

    while remaining <= 0 {
        if (current_level_index as usize) >= len - 1 {
            return TickResult {
                remaining: 0,
                time_remaining_at_start: 0,
                current_level_index,
                start_timestamp,
                finished: true,
                level_changed: true,
                play_audio: 0,
            };
        }

        let was_break = structure_types_is_break[current_level_index as usize] != 0;
        current_level_index += 1;

        let new_level_duration = structure_durations[current_level_index as usize] * 60;
        remaining = new_level_duration + remaining;

        start_timestamp = now - ((new_level_duration - remaining) as f64 * 1000.0);
        new_time_remaining_at_start = new_level_duration;
        level_changed = true;
        play_audio = if was_break { 1 } else { 2 };
    }

    TickResult {
        remaining,
        time_remaining_at_start: new_time_remaining_at_start,
        current_level_index,
        start_timestamp,
        finished: false,
        level_changed,
        play_audio,
    }
}
