import { registerBlockType } from '@wordpress/blocks';
import { RichText, InspectorControls, BlockControls, AlignmentToolbar, ColorPalette } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import './editor.css';
import './style.css';

registerBlockType('rf-custom-blocks/rf-block', {
    title: __('RF Block', 'custom-blocks'),
    icon: 'universal-access-alt',
    category: 'common',
    attributes: {
        content: {
            type: 'string',
            source: 'html',
            selector: 'p',
        },
        alignment: {
            type: 'string',
            default: 'none',
        },
        textColor: {
            type: 'string',
            default: '#000000',
        },
    },
    edit({ attributes, setAttributes }) {
        const { content, alignment, textColor } = attributes;

        return (
            <>
                <InspectorControls>
                    <PanelBody title={__('Text Color', 'custom-blocks')}>
                        <ColorPalette
                            value={textColor}
                            onChange={(newColor) => setAttributes({ textColor: newColor })}
                        />
                    </PanelBody>
                </InspectorControls>
                <BlockControls>
                    <AlignmentToolbar
                        value={alignment}
                        onChange={(newAlignment) => setAttributes({ alignment: newAlignment })}
                    />
                </BlockControls>
                <RichText
                    tagName="p"
                    className="rf-block"
                    style={{ textAlign: alignment, color: textColor }}
                    onChange={(newContent) => setAttributes({ content: newContent })}
                    value={content}
                />
            </>
        );
    },
    save({ attributes }) {
        const { content, alignment, textColor } = attributes;

        return (
            <RichText.Content
                tagName="p"
                className="rf-block"
                style={{ textAlign: alignment, color: textColor }}
                value={content}
            />
        );
    },
});
