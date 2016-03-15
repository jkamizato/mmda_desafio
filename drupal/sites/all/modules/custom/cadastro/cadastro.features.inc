<?php
/**
 * @file
 * cadastro.features.inc
 */

/**
 * Implements hook_node_info().
 */
function cadastro_node_info() {
  $items = array(
    'cadastro' => array(
      'name' => t('Cadastro'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  drupal_alter('node_info', $items);
  return $items;
}
