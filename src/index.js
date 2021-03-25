import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    FlatList,
    Text,
    StyleSheet,
    StatusBar
} from 'react-native';

import api from './services/api';

export default function App() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('projects').then(res => {
            console.log(res.data)
            setProjects(res.data);
        })
    }, [])

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#7159c1" />

            <SafeAreaView style={styles.container}>
                <FlatList
                    data={projects}
                    keyExtractor={project => project._id}
                    renderItem={({ item: project }) => (
                        <Text
                            style={styles.project}
                        >
                            {project.title}
                        </Text>
                    )}
                />
            </SafeAreaView>


            {/* <View style={styles.container}>
                {projects.map(project => (
                    <Text
                        key={project._id}
                        style={styles.project}
                    >
                        {project.title}
                    </Text>
                ))}
            </View> */}
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7159c1',
    },
    project: {
        color: '#FFF',
        fontSize: 30,
        fontWeight: 'bold'
    }
})