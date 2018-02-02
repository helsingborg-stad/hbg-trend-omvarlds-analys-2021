<?php 

if (function_exists('acf_add_local_field_group')) {
    acf_add_local_field_group(array(
    'key' => 'group_5a6744018083f',
    'title' => __('Widget header - Links', 'municipio'),
    'fields' => array(
        0 => array(
            'key' => 'field_5a67441743e92',
            'label' => __('Links', 'municipio'),
            'name' => 'widget_header_links',
            'type' => 'flexible_content',
            'instructions' => '',
            'required' => 0,
            'conditional_logic' => 0,
            'wrapper' => array(
                'width' => '',
                'class' => '',
                'id' => '',
            ),
            'layouts' => array(
                '5a67454543e96' => array(
                    'key' => '5a67454543e96',
                    'name' => 'external_link',
                    'label' => __('External link', 'municipio'),
                    'display' => 'block',
                    'sub_fields' => array(
                        0 => array(
                            'key' => 'field_5a674879ac323',
                            'label' => 'Icon',
                            'name' => 'icon',
                            'type' => 'pricons',
                            'instructions' => '',
                            'required' => 0,
                            'conditional_logic' => 0,
                            'wrapper' => array(
                                'width' => '',
                                'class' => '',
                                'id' => '',
                            ),
                            'return_format' => 'class',
                        ),
                        1 => array(
                            'key' => 'field_5a6748a5ac324',
                            'label' => 'Text',
                            'name' => 'text',
                            'type' => 'text',
                            'instructions' => '',
                            'required' => 1,
                            'conditional_logic' => 0,
                            'wrapper' => array(
                                'width' => '',
                                'class' => '',
                                'id' => '',
                            ),
                            'default_value' => '',
                            'placeholder' => '',
                            'prepend' => '',
                            'append' => '',
                            'maxlength' => '',
                        ),
                        2 => array(
                            'key' => 'field_5a67504cefd55',
                            'label' => 'Hide text',
                            'name' => 'hide_text',
                            'type' => 'true_false',
                            'instructions' => '',
                            'required' => 0,
                            'conditional_logic' => 0,
                            'wrapper' => array(
                                'width' => '',
                                'class' => '',
                                'id' => '',
                            ),
                            'message' => '',
                            'default_value' => 0,
                            'ui' => 0,
                            'ui_on_text' => '',
                            'ui_off_text' => '',
                        ),
                        3 => array(
                            'key' => 'field_5a67486eac322',
                            'label' => 'URL',
                            'name' => 'url',
                            'type' => 'url',
                            'instructions' => '',
                            'required' => 1,
                            'conditional_logic' => 0,
                            'wrapper' => array(
                                'width' => '',
                                'class' => '',
                                'id' => '',
                            ),
                            'default_value' => '',
                            'placeholder' => '',
                        ),
                    ),
                    'min' => '',
                    'max' => '',
                ),
                '5a6748b3ac325' => array(
                    'key' => '5a6748b3ac325',
                    'name' => 'internal_link',
                    'label' => __('Internal link', 'municipio'),
                    'display' => 'block',
                    'sub_fields' => array(
                        0 => array(
                            'key' => 'field_5a6748b3ac326',
                            'label' => 'Icon',
                            'name' => 'icon',
                            'type' => 'pricons',
                            'instructions' => '',
                            'required' => 0,
                            'conditional_logic' => 0,
                            'wrapper' => array(
                                'width' => '',
                                'class' => '',
                                'id' => '',
                            ),
                            'return_format' => 'class',
                        ),
                        1 => array(
                            'key' => 'field_5a6748b3ac327',
                            'label' => 'Text',
                            'name' => 'text',
                            'type' => 'text',
                            'instructions' => '',
                            'required' => 1,
                            'conditional_logic' => 0,
                            'wrapper' => array(
                                'width' => '',
                                'class' => '',
                                'id' => '',
                            ),
                            'default_value' => '',
                            'placeholder' => '',
                            'prepend' => '',
                            'append' => '',
                            'maxlength' => '',
                        ),
                        2 => array(
                            'key' => 'field_5a675065efd58',
                            'label' => 'Hide text',
                            'name' => 'hide_text',
                            'type' => 'true_false',
                            'instructions' => '',
                            'required' => 0,
                            'conditional_logic' => 0,
                            'wrapper' => array(
                                'width' => '',
                                'class' => '',
                                'id' => '',
                            ),
                            'message' => '',
                            'default_value' => 0,
                            'ui' => 0,
                            'ui_on_text' => '',
                            'ui_off_text' => '',
                        ),
                        3 => array(
                            'key' => 'field_5a6748b8ac329',
                            'label' => 'URL',
                            'name' => 'url',
                            'type' => 'page_link',
                            'instructions' => '',
                            'required' => 1,
                            'conditional_logic' => 0,
                            'wrapper' => array(
                                'width' => '',
                                'class' => '',
                                'id' => '',
                            ),
                            'post_type' => array(
                            ),
                            'taxonomy' => array(
                            ),
                            'allow_null' => 0,
                            'allow_archives' => 1,
                            'multiple' => 0,
                        ),
                    ),
                    'min' => '',
                    'max' => '',
                ),
                '5a6748eaac32a' => array(
                    'key' => '5a6748eaac32a',
                    'name' => 'search_trigger',
                    'label' => __('Search trigger', 'municipio'),
                    'display' => 'block',
                    'sub_fields' => array(
                        0 => array(
                            'key' => 'field_5a675061efd57',
                            'label' => 'Hide text',
                            'name' => 'hide_text',
                            'type' => 'true_false',
                            'instructions' => '',
                            'required' => 0,
                            'conditional_logic' => 0,
                            'wrapper' => array(
                                'width' => '',
                                'class' => '',
                                'id' => '',
                            ),
                            'message' => '',
                            'default_value' => 0,
                            'ui' => 0,
                            'ui_on_text' => '',
                            'ui_off_text' => '',
                        ),
                    ),
                    'min' => '',
                    'max' => '',
                ),
                '5a674db4e25be' => array(
                    'key' => '5a674db4e25be',
                    'name' => 'menu_trigger',
                    'label' => __('Menu trigger', 'municipio'),
                    'display' => 'block',
                    'sub_fields' => array(
                        0 => array(
                            'key' => 'field_5a67505cefd56',
                            'label' => 'Hide text',
                            'name' => 'hide_text',
                            'type' => 'true_false',
                            'instructions' => '',
                            'required' => 0,
                            'conditional_logic' => 0,
                            'wrapper' => array(
                                'width' => '',
                                'class' => '',
                                'id' => '',
                            ),
                            'message' => '',
                            'default_value' => 0,
                            'ui' => 0,
                            'ui_on_text' => '',
                            'ui_off_text' => '',
                        ),
                    ),
                    'min' => '',
                    'max' => '',
                ),
                '5a674e21cb6c0' => array(
                    'key' => '5a674e21cb6c0',
                    'name' => 'translate_trigger',
                    'label' => __('Translate trigger', 'municipio'),
                    'display' => 'block',
                    'sub_fields' => array(
                        0 => array(
                            'key' => 'field_5a67507cefd59',
                            'label' => 'Hide text',
                            'name' => 'hide_text',
                            'type' => 'true_false',
                            'instructions' => '',
                            'required' => 0,
                            'conditional_logic' => 0,
                            'wrapper' => array(
                                'width' => '',
                                'class' => '',
                                'id' => '',
                            ),
                            'message' => '',
                            'default_value' => 0,
                            'ui' => 0,
                            'ui_on_text' => '',
                            'ui_off_text' => '',
                        ),
                    ),
                    'min' => '',
                    'max' => '',
                ),
            ),
            'button_label' => __('Add link', 'municipio'),
            'min' => '',
            'max' => '',
        ),
        1 => array(
            'key' => 'field_5a6745d543e98',
            'label' => '',
            'name' => '',
            'type' => 'clone',
            'instructions' => '',
            'required' => 0,
            'conditional_logic' => 0,
            'wrapper' => array(
                'width' => '',
                'class' => '',
                'id' => '',
            ),
            'clone' => array(
                0 => 'group_5a65d5e7e913b',
            ),
            'display' => 'seamless',
            'layout' => 'block',
            'prefix_label' => 0,
            'prefix_name' => 0,
        ),
    ),
    'location' => array(
        0 => array(
            0 => array(
                'param' => 'widget',
                'operator' => '==',
                'value' => 'widget-header-links',
            ),
        ),
    ),
    'menu_order' => 0,
    'position' => 'normal',
    'style' => 'default',
    'label_placement' => 'top',
    'instruction_placement' => 'label',
    'hide_on_screen' => '',
    'active' => 1,
    'description' => '',
));
}