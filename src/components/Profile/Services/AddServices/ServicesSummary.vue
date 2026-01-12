<template>
  <div class="editor-container">
    <div v-if="editor" class="toolbar">
      <button @click="editor.chain().focus().toggleBold().run()" :class="{ 'active': editor.isActive('bold') }">
        <strong>B</strong>
      </button>
      <button @click="editor.chain().focus().toggleItalic().run()" :class="{ 'active': editor.isActive('italic') }">
        <em>I</em>
      </button>
      <button @click="editor.chain().focus().toggleUnderline().run()" :class="{ 'active': editor.isActive('underline') }">
        <u>U</u>
      </button>
      <button @click="editor.chain().focus().toggleStrike().run()" :class="{ 'active': editor.isActive('strike') }">
        <s>S</s>
      </button>
      <button @click="editor.chain().focus().toggleBulletList().run()" :class="{ 'active': editor.isActive('bulletList') }">
        • List
      </button>
      <button @click="editor.chain().focus().toggleOrderedList().run()" :class="{ 'active': editor.isActive('orderedList') }">
        1. List
      </button>
      <button @click="setLink">
        🔗
      </button>
      <button @click="editor.chain().focus().toggleBlockquote().run()" :class="{ 'active': editor.isActive('blockquote') }">
        "
      </button>
    </div>
    
    <editor-content :editor="editor" class="editor-content" />
  </div>
  <p class="chars">
    <span :class="{ 'error': charCount < 10 && charCount > 0 }">
        Min. 10, max. 4000 chars — {{ charCount }}/4000
    </span>
  </p>
</template>

<script setup>
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import Link from '@tiptap/extension-link'
import { ref, watch, computed } from 'vue'

const emit = defineEmits(['update:modelValue'])

const editor = useEditor({
  content: '',
  extensions: [
    StarterKit,
    Underline,
    Link.configure({
      openOnClick: false,
    })
  ],
  onUpdate: ({ editor }) => {
    emit('update:modelValue', editor.getHTML())
  }
})

const setLink = () => {
  const url = window.prompt('URL')
  
  if (url === null) {
    return
  }
  
  if (url === '') {
    editor.value.chain().focus().unsetLink().run()
    return
  }
  
  editor.value.chain().focus().setLink({ href: url }).run()
}

const charCount = computed(() => {
  return editor.value ? editor.value.getText().length : 0
})
</script>

<style scoped>
.editor-container {
    position: relative;
    margin: 20px auto;
    background: #fff;
    border: 1px solid #D9D9D9;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.editor-content {
    font-size: 14px;
    min-height: 200px;
    padding: 60px 20px 50px 20px;
    outline: none;
}

.editor-content textarea{
    width: 100%;
    min-height: 100%;
    border: none;
    outline: none;
    margin-top: 10px;
}

/* Placeholder مخصص للـ contenteditable */
.editor-content.placeholder::before {
  content: attr(placeholder);
  color: #999;
  pointer-events: none;
  position: absolute;
  top: 60px;
  left: 20px;
  display: block;
}

.editor-content:not(.placeholder)::before {
  display: none;
}

/* الـ Toolbar */
.toolbar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 12px 20px;
  background: white;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  z-index: 10;
}

.toolbar button {
  background: none;
  border: none;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  color: #555;
  transition: all 0.2s;
}

.toolbar button:hover {
  background: #f0f0f0;
  color: #000;
}
.toolbar button.active{
    background: #f0f0f0;
    color: #000;
}

.chars{
  color: var(--text-color);
  font-size: 14px;
}

.chars .count.error {
  color: #ff6b6b;
}
:deep(.ProseMirror) {
    margin-top: 10px;
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
}
</style>