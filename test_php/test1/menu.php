<?php
include_once "menu_array.php";

print menu_generate($menu);;

/**
 * @param $item_menu array com os itens de menu
 * @return string com o html formatado
 */
function menu_generate($item_menu) {
    $output = '<ul>';
    foreach ($item_menu as $item) {
        $output .= '<ol><a href="'. $item['href'] . '">' . $item['title'] .'</a></ol>';
        if (isset($item['child'])) {
            $output .= menu_generate($item['child']);
        }
    }
    $output .= '</ul>';
    return $output;
}