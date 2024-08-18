def recognize_gesture(gesture):
    if gesture == 'swipe_left':
        return 'prev_page'
    elif gesture == 'swipe_right':
        return 'next_page'
    elif gesture == 'swipe_up':
        return 'scroll_up'
    elif gesture == 'swipe_down':
        return 'scroll_down'
    else:
        return 'unknown_action'
