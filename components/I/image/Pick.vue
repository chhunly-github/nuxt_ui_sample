<template>
    <div class="inline-flex items-center space-x-3">
        <div>
            <IBtnBasic label="upload" icon="i-heroicons-cloud-arrow-up" @click="uploadInput.click()"/>
            <input
                class="hidden"
                ref="uploadInput"
                type="file"
                accept="image/jpg, image/jpeg, image/png, image/gif"
                @change="selectFile"
            />
        </div>

        <!-- Crop result preview -->
        <section class="section" v-if="result.dataURL && result.blobURL">
            <div class="preview">
                <img :src="result.blobURL"/>
            </div>
        </section>

        <!-- A Popup for cropping -->
        <!-- You can replace it with the framework's Modal component -->
        <UModal v-model="isShowModal">
            <UCard>
                <template #header>

                </template>
                <VuePictureCropper
                    :boxStyle="{
                                width: '80%',
                                height: '80%',
                                backgroundColor: '#f8f8f8',
                                margin: 'auto',
                              }"
                    :img="pic"
                    :options="{
                                viewMode: 1,
                                dragMode: 'crop',
                                aspectRatio: ratio,
                                cropBoxResizable: true,
                              }"
                    :presetMode="{
                                mode: 'fixedSize', //'round',
                                width: 100,
                                height: 100,
                            }"
                />
                <template #footer >
                    <div class="flex justify-between">
                        <IBtnCancel @click="isShowModal = false"/>
                        <IBtnBasic label="Crop" @click="getResult"/>
                    </div>
                </template>
            </UCard>
        </UModal>
    </div>
</template>

<script setup lang="ts">
import {reactive, ref} from 'vue'
import VuePictureCropper, {cropper} from 'vue-picture-cropper'
// Only used in demo
const isShowModal = ref<boolean>(false)
const uploadInput = ref<HTMLInputElement | null>(null)
const pic = ref<string>('')
const result = reactive({
    dataURL: '',
    blobURL: '',
});
withDefaults(defineProps<{
    ratio?: number
}>(), {
    ratio: 4/3
});

/**
 * Select the picture to be cropped
 */
function selectFile(e: Event) {
    // Reset last selection and results
    pic.value = ''
    result.dataURL = ''
    result.blobURL = ''

    // Get selected files
    const {files} = e.target as HTMLInputElement
    if (!files || !files.length) return

    // Convert to dataURL and pass to the cropper component
    const file = files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
        // Update the picture source of the `img` prop
        pic.value = String(reader.result)

        // Show the modal
        isShowModal.value = true

        // Clear selected files of input element
        if (!uploadInput.value) return
        uploadInput.value.value = ''
    }
}

/**
 * Get cropping results
 */
async function getResult() {
    if (!cropper) return
    const base64 = cropper.getDataURL()
    const blob: Blob | null = await cropper.getBlob()
    if (!blob) return

    const file = await cropper!.getFile({
        fileName: 'green',
    })

    console.log({base64, blob, file})
    result.dataURL = base64
    result.blobURL = URL.createObjectURL(blob)
    isShowModal.value = false
}
</script>

<style lang="less" scoped>
</style>
